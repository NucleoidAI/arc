const { v4: uuid } = require("uuid");
const nucleoid = require("./nucleoid");
const dataset = require("../dataset");
const openai = require("./openai");
const Markdown = require("./Markdown");
const Matrix = require("../lib/Matrix");

async function instances(
  declarations,
  training_dataset,
  train_instances,
  test_input_matrix
) {
  console.log("Analyzing test input matrix...");
  console.log("");

  console.debug("Test Input Matrix:");
  Matrix.toString(test_input_matrix);
  console.debug("");

  const sessionId = uuid();

  console.log("Initializing Nucleoid session with declarations...");
  await nucleoid.run(sessionId, declarations);

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Extract input instances based on declarations for the input matrix and Nucleoid code
          - Return instances in JSON format as { "instances": [ { input_instance: [INPUT_INSTANCE], nuc: [NUCLEOID_CODE] }, ... ] }`,
      },
      {
        role: "user",
        content: `
          Nucleoid Documentation: ${dataset.nucleoid}
          ARC Documentation: ${dataset.arc}
      `,
      },
      {
        role: "user",
        content: `
          Declarations:
          ${declarations}
          Given Input Matrix:
          ${JSON.stringify(test_input_matrix)}
      `,
      },
    ],
  });
  const [first] = choices;

  let index1 = 1;
  const result = Markdown.toJSON(first.message.content);

  for (const instance of result.instances) {
    const { input_instance } = instance;
    console.log("Creating instance in Nucleoid...");
    instance.instance_value = await nucleoid.run(sessionId, instance.nuc);

    instance.output_instance = await output_instance(
      declarations,
      training_dataset,
      train_instances,
      input_instance
    );

    console.debug(`Test Instance ${index1++}:`);
    Matrix.toString(instance.input_instance);
    console.debug("---");
    Matrix.toString(instance.output_instance);
    console.debug(instance.nuc);
    console.debug(instance.instance_value);
    console.debug("");
  }

  console.log("Test Instances are extracted");
  return result.instances;
}

async function output_instance(
  declarations,
  training_dataset,
  train_instances,
  test_instance
) {
  console.log("Extracting test output instance...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Draw output instance from given input instance
          - Return in JSON format as { output_instance: [ARC_OUTPUT_INSTANCE_MATRIX] }`,
      },
      {
        role: "user",
        content: `
          ARC Documentation: ${dataset.arc}
      `,
      },
      {
        role: "user",
        content: `
          Training Matrix Dataset:
          ${JSON.stringify(training_dataset)}
          Training Instance Dataset:
          ${JSON.stringify(train_instances)}
          Given Input Instance:
          ${JSON.stringify(test_instance)}
      `,
      },
    ],
  });
  const [first] = choices;

  console.log("Test output instance is extracted");
  const { output_instance } = Markdown.toJSON(first.message.content);
  return output_instance;
}

function merge(...matrices) {
  const numRows = matrices[0].length;
  const numCols = matrices[0][0].length;

  let result = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  for (let matrix of matrices) {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (matrix[i][j] !== 0) {
          result[i][j] = matrix[i][j];
        }
      }
    }
  }

  return result;
}

module.exports = { instances, merge };
