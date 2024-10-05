const nucleoid = require("./nucleoid");
const openai = require("./openai");
const Matrix = require("../lib/Matrix");
const instruct_dataset = require("../instruct_dataset");

async function instances({
  instance_patterns,
  train_dataset,
  test_input_matrix,
}) {
  console.log("Analyzing test_input_matrix...");
  console.log("");

  console.debug("test_input_matrix:");
  Matrix.toString(test_input_matrix);
  console.debug("");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Extract each input_instance from given input_matrix based on given instance_patterns in train_dataset
          - Use instruct_dataset and train_dataset as a reference
          - Return in JSON format as { "instances": [ { input_instance: [INPUT_INSTANCE] } ] }
        `,
      },
      {
        role: "system",
        content: `
          Instructions:
          - input_instance must contain only 1 instance of found pattern
          - input_instance must be filled rest of empty spaces with 0s
          - input_instance must have in same dimension with its input_matrix
          ${instruct_dataset.visualizer.instances()}
        `,
      },
      {
        role: "user",
        content: `
          instance_patterns:
          ${instance_patterns}
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
  const { instances } = JSON.parse(first.message.content);

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
          - Return in JSON format as { output_instance: [OUTPUT_INSTANCE] ] }`,
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
          ${JSON.stringify({
            declarations: train_dataset.declarations,
            dateset: train_dataset.dataset.map(({ instances }) => ({
              instances: instances.map(
                ({ input_instance, output_instance, instance_value }) => ({
                  input_instance,
                  output_instance,
                  instance_value,
                })
              ),
            })),
          })}
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
