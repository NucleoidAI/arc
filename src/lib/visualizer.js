const nucleoid = require("./nucleoid");
const openai = require("./openai");
const Matrix = require("../lib/Matrix");
const instruct_dataset = require("../instruct_dataset");
const Markdown = require("../lib/Markdown");

async function instances({ train_dataset, test_input_matrix }) {
  console.log("Analyzing test_input_matrix...");
  console.log("");

  console.debug("test_input_matrix:");
  Matrix.toString(test_input_matrix);
  console.debug("");

  const { choices } = await openai.chat({
    response_format: { type: "text" },
    max_tokens: 10000,
    messages: [
      {
        role: "system",
        content: `
          Chain-of-Thought Flow:
          For how to extract each input_instance from given input_matrix based on given instance_patterns:
            1. Provide detailed analysis of each input_instance in instances of given train_dataset with going through
            2. Provide logical explanation of patterns found in between input_matrix and instances in given train_dataset
            4. Provide complete details of found shapes and their parts also their formal names in given train_dataset
            3. Provide all rules found in patterns for extracting in given train_dataset
            5. Provide complete summary of findings in given train_dataset
            6. Explain how to extract from given input_matrix
            7. Find all instances in given input_matrix based on findings with detailed analysis
            8. Generate potential solutions
            9. Evaluate and select solutions
            10. Extract each input_instance from given input_matrix based on findings in train_dataset and return in JSON format as { "instances": [ { input_instance: [INPUT_INSTANCE] } ] }
        `,
      },
      {
        role: "system",
        content: `
          Instructions:
          - input_instance must contain only 1 instance of found pattern
          - input_instance must be filled rest of empty spaces with 0s
          - input_instance must have in same dimension with its input_matrix
          - Provide only clear patterns and if found pattern is not certain, skip it without mentioning
          - Each Chain-of-Thought step must be complete and detailed
          ${instruct_dataset.visualizer.instances()}
        `,
      },
      {
        role: "user",
        content: `
          train_dataset:
          ${JSON.stringify({
            dateset: train_dataset.dataset.map(
              ({ input_matrix, instances }) => ({
                input_matrix,
                instances: instances.map(({ input_instance }) => ({
                  input_instance,
                })),
              })
            ),
          })}
          input_matrix:
          ${JSON.stringify(test_input_matrix)}
        `,
      },
    ],
  });
  const [first] = choices;
  console.debug(first.message.content);
  const { instances } = Markdown.json(first.message.content);

  console.debug("Test instances:");
  instances.forEach((i) => {
    Matrix.toString(i.input_instance);
    console.debug("--");
  });
  return { instances };
}

async function value({
  instance_name,
  test_session_id,
  train_dataset,
  test_input_instance,
}) {
  console.log("Calculating test instance_value...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Create Nucleoid code for given instance
          - Use instruct_dataset and train_dataset as a reference
          - Return in JSON format as { nuc: "NUCLEOID_CODE" }
        `,
      },
      {
        role: "system",
        content: instruct_dataset.visualizer.value(),
      },
      {
        role: "user",
        content: `
          instance_name:
          ${instance_name}
          train_dataset:
          ${JSON.stringify({
            declarations: train_dataset.declarations,
            dateset: train_dataset.dataset.map(
              ({ input_matrix, output_matrix, instances }) => ({
                input_matrix,
                output_matrix,
                instances: instances.map(
                  ({
                    instance_name,
                    input_instance,
                    output_instance,
                    nuc,
                  }) => ({
                    instance_name,
                    input_instance,
                    output_instance,
                    nuc,
                  })
                ),
              })
            ),
          })}
          input_instance:
          ${JSON.stringify(test_input_instance)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { nuc } = JSON.parse(first.message.content);

  console.log("Creating test instance in Nucleoid...");
  const instance_value = await nucleoid.run(test_session_id, nuc);

  console.debug("nuc:");
  console.debug(nuc);
  console.debug("instance_value:");
  console.debug(instance_value);

  return { nuc, instance_value };
}

async function output_instance({
  patterns,
  train_dataset,
  test_input_instance,
  instance_value,
}) {
  console.log("Extracting test output_instance...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Generate output_instance for given input_instance and instance_value based on given patterns and declarations
          - Use instruct_dataset and train_dataset as a reference 
          - Return in JSON format as { output_instance: [OUTPUT_INSTANCE] }`,
      },
      {
        role: "system",
        content: instruct_dataset.visualizer.output_instance(),
      },
      {
        role: "user",
        content: `
          patterns:
          ${patterns}
          train_dataset:
          ${JSON.stringify(train_dataset)}
          input_instance:
          ${JSON.stringify(test_input_instance)}
          instance_value:
          ${JSON.stringify(instance_value)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { output_instance } = JSON.parse(first.message.content);

  console.debug("output_instance:");
  Matrix.toString(output_instance);

  return { output_instance };
}

module.exports = { instances, value, output_instance };
