const nucleoid = require("./nucleoid");
const openai = require("./openai");
const Matrix = require("../lib/Matrix");
const instruct_dataset = require("../instruct_dataset");

async function instances({ patterns, train_instances, test_input_matrix }) {
  console.log("Analyzing test input matrix...");
  console.log("");

  console.debug("Test Input Matrix:");
  Matrix.toString(test_input_matrix);
  console.debug("");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Extract each input_instance from given input_matrix based on given patterns in training instances
          - Return instances in JSON format as { "instances": [ { input_instance: [INPUT_INSTANCE] }, ... ] }
        `,
      },
      {
        role: "system",
        content: `
          Instructions:
          - input_matrix is inserted matrix
          - output_matrix is converted matrix from inserted matrix
          - input_instance contains an instance in input_matrix based on found pattern in between input_matrix and output_matrix
          - input_instance must contain only 1 instance of found pattern
          - input_instance must be filled rest of empty spaces with 0s
          - input_instance must have in same dimension with its input_matrix
          ${instruct_dataset.visualizer.instances()}
        `,
      },
      {
        role: "user",
        content: `
          patterns:
          ${patterns}
          train_instances:
          ${JSON.stringify(
            train_instances.map(({ input_instance, output_instance }) => ({
              input_instance,
              output_instance,
            }))
          )}
          input_matrix:
          ${JSON.stringify(test_input_matrix)}
          `,
      },
    ],
  });
  const [first] = choices;
  const { instances } = JSON.parse(first.message.content);

  console.debug("Test Instances:");
  instances.forEach((i) => {
    Matrix.toString(i.input_instance);
    console.debug("--");
  });

  console.log("Test Instances are extracted");
  return { instances };
}

async function value({
  instance_name,
  test_session_id,
  declarations,
  train_dataset,
  train_instances,
  test_input_instance,
}) {
  console.log("Extracting test output instance...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Create Nucleoid code for given instance 
          - Return instances in JSON format as { nuc: "NUCLEOID_CODE" }
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
          declarations:
          ${declarations.join("\n")}
          train_dataset:
          ${JSON.stringify(train_dataset)}
          train_instances:
          ${JSON.stringify(train_instances)}
          input_instance:
          ${JSON.stringify(test_input_instance)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { nuc } = JSON.parse(first.message.content);

  console.log("Creating instance in Nucleoid...");
  const instance_value = await nucleoid.run(test_session_id, nuc);

  console.debug("nuc:");
  console.debug(nuc);
  console.debug("instance_value:");
  console.debug(instance_value);

  return { nuc, instance_value };
}

async function output_instance({
  patterns,
  train_instances,
  test_input_instance,
  instance_value,
}) {
  console.log("Extracting test output instance...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Generate output_instance for given input_instance and instance_value based on given patterns and declarations 
          - Return instances in JSON format as { output_instance: [OUTPUT_INSTANCE] ] }`,
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
          train_instances:
          ${JSON.stringify(
            train_instances.map(
              ({ input_instance, output_instance, instance_value }) => ({
                input_instance,
                output_instance,
                instance_value,
              })
            )
          )}
          instance_value:
          ${JSON.stringify(instance_value)}
          input_instance:
          ${JSON.stringify(test_input_instance)}
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
