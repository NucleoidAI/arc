const { v4: uuid } = require("uuid");
const nucleoid = require("./nucleoid");
const dataset = require("../dataset");
const openai = require("./openai");
const Markdown = require("./Markdown");

async function instances(declarations, train_instances, test_matrix) {
  console.log("Analyzing test instances...");
  console.log("");

  const sessionId = uuid();

  console.debug("Test Matrix:");
  console.debug(JSON.stringify(test_matrix));

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
          ARC Training Documentation: ${dataset.arc}
      `,
      },
      {
        role: "user",
        content: `
          Declarations:
          ${declarations}
          Given Input Matrix:
          ${JSON.stringify(test_matrix)}
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
    console.debug(`Test Instance ${index1++}: ${JSON.stringify(instance)}`);

    instance.output_instance = await output_instance(
      declarations,
      train_instances,
      input_instance
    );
  }

  console.log("Test Instances are extracted");
  return result.instances;
}

async function output_instance(declarations, train_instances, test_instance) {
  console.log("Extracting output instance...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Draw "output_instance" for given "input_instance" based on "instance_value" 
          - Return in JSON format as { output_instance: [ARC_OUTPUT_INSTANCE_MATRIX] }`,
      },
      {
        role: "user",
        content: `
          Nucleoid Documentation: ${dataset.nucleoid}
          ARC Training Documentation: ${dataset.arc}
      `,
      },
      {
        role: "user",
        content: `
          Declarations:
          ${declarations}
          ARC Training Dataset:
          ${train_instances}
          Given Input Instance:
          ${JSON.stringify(test_instance)}
      `,
      },
    ],
  });
  const [first] = choices;

  console.log("Output found:");
  const { output_instance } = Markdown.toJSON(first.message.content);
  console.debug(JSON.stringify(output_instance));

  return output_instance;
}

function merge(...matrices) {
  const rows = matrices[0].length;
  const cols = matrices[0][0].length;

  let mergedMatrix = [];

  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < cols; j++) {
      let value = 0;

      for (let k = 0; k < matrices.length; k++) {
        if (matrices[k][i][j] !== 0) {
          value = matrices[k][i][j];
        }
      }
      newRow.push(value);
    }
    mergedMatrix.push(newRow);
  }

  console.log("Instance matrices are merged");
  return mergedMatrix;
}

module.exports = { instances, merge };
