const { v4: uuid } = require("uuid");
const nucleoid = require("./nucleoid");
const dataset = require("../dataset");
const openai = require("./openai");
const Markdown = require("./Markdown");
const Matrix = require("../lib/Matrix");
const { patterns } = require("./analyzer");

async function instances({
  patterns,
  declarations,
  training_dataset,
  training_instances,
  test_input_matrix,
}) {
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
          - Extract each input_instance from given input_matrix
          - Return instances in JSON format as { "instances": [ { input_instance: [INPUT_INSTANCE] }, ... ] }
        `,
      },
      {
        role: "system",
        content: `
          Training:
          - input_matrix is inserted matrix
          - output_matrix is converted matrix from inserted matrix
          - input_instance contains an instance in input_matrix based on found pattern in between input_matrix and output_matrix
          - input_instance must contain only 1 instance of found pattern
          - input_instance must be filled rest of empty spaces with 0s
          - input_instance must have in same dimension with its input_matrix
          ${dataset.visualizer.instances()}
        `,
      },
      {
        role: "user",
        content: `
          Patterns:
          ${patterns}
          Training Dataset:
          ${JSON.stringify(training_dataset)}
          Training Instances:
          ${JSON.stringify(training_instances)}
          Given Input Matrix:
          ${JSON.stringify(test_input_matrix)}
          `,
      },
    ],
  });
  const [first] = choices;
  const { instances } = Markdown.toJSON(first.message.content);

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
  training_dataset,
  training_instances,
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
        content: dataset.visualizer.value(),
      },
      {
        role: "user",
        content: `
          instance_name:
          ${instance_name}
          Declarations:
          ${JSON.stringify(declarations)}
          Training Dataset:
          ${JSON.stringify(training_dataset)}
          Training Instances:
          ${JSON.stringify(training_instances)}
          Given Input Instance:
          ${JSON.stringify(test_input_instance)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { nuc } = Markdown.toJSON(first.message.content);

  console.log("Creating instance in Nucleoid...");
  const instance_value = await nucleoid.run(test_session_id, nuc);

  console.debug("nuc:");
  console.debug(nuc);
  console.debug("Value:");
  console.debug(instance_value);

  return { nuc, instance_value };
}

async function output_instance({
  patterns,
  declarations,
  training_dataset,
  training_instances,
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
        content: dataset.visualizer.output_instance(),
      },
      {
        role: "user",
        content: `
          Training Instances:
          ${JSON.stringify(
            training_instances.map(
              ({ input_instance, output_instance, instance_value }) => ({
                input_instance,
                output_instance,
                instance_value,
              })
            )
          )}
          Given patterns:
          ${patterns}
          Given instance_value:
          ${JSON.stringify(instance_value)}
          Given input_instance:
          ${JSON.stringify(test_input_instance)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { output_instance } = Markdown.toJSON(first.message.content);

  console.debug("Output Instance:");
  Matrix.toString(output_instance);

  return { output_instance };
}

module.exports = { instances, value, output_instance };
