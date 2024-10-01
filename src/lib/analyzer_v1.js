const openai = require("./openai");
const dataset = require("../dataset");
const Markdown = require("./Markdown");
const { v4: uuid } = require("uuid");
const nucleoid = require("./nucleoid");
const Matrix = require("../lib/Matrix");

async function declarations(training_dataset) {
  console.log("Analyzing declarations...");
  const messages = [
    {
      role: "system",
      content: `
        - Identify declarations for given input and output matrices in Nucleoid Syntax
        - Return declarations in JSON format as { declarations: [NUC_DECLARATIONS] }`,
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
        Given Input and Output Matrices:
        ${JSON.stringify(training_dataset)}
      `,
    },
  ];

  const { choices } = await openai.chat({
    messages,
  });
  const [first] = choices;

  const { declarations } = Markdown.toJSON(first.message.content);

  console.debug("Declarations:");
  console.debug(declarations);
  console.log("");

  return declarations.join("\n");
}

async function instances(declarations, training_dataset) {
  console.log("Analyzing training dataset...");
  console.log(`${training_dataset.length} matrix pair(s) to analyze`);
  console.log("");

  const instances = [];
  let index1 = 1;

  for (const { input_matrix, output_matrix } of training_dataset) {
    const sessionId = uuid();

    console.log("Initializing Nucleoid session with declarations...");
    await nucleoid.run(sessionId, declarations);

    console.debug(`Input Matrix ${index1++}:`);
    Matrix.toString(input_matrix);
    console.debug("");

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
            ${JSON.stringify(input_matrix)}
      `,
        },
      ],
    });
    const [first] = choices;

    let index2 = instances.length + 1;
    const result = Markdown.toJSON(first.message.content);

    for (const instance of result.instances) {
      const { input_instance, nuc } = instance;
      console.log("Creating instance in Nucleoid...");
      instance.instance_value = await nucleoid.run(sessionId, nuc);

      instance.output_instance = await output_instance(
        declarations,
        input_matrix,
        output_matrix,
        input_instance
      );

      console.debug(`Training Input Instance ${index2++}:`);
      Matrix.toString(instance.input_instance);
      console.debug("---");
      Matrix.toString(instance.output_instance);
      console.debug(instance.nuc);
      console.debug(instance.instance_value);
      console.debug("");
    }

    instances.push(...result.instances);
  }

  console.log("Input and output instances are extracted");
  return instances;
}

async function output_instance(
  declarations,
  input_matrix,
  output_matrix,
  input_instance
) {
  console.log("Extracting training output instance...");
  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Find output instance from given output matrix for given input instance based on declarations
          - Return output instance in JSON format as { output_instance: [ARC_OUTPUT_INSTANCE_MATRIX] }`,
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
          ${JSON.stringify(input_matrix)}
          Given Output Matrix:
          ${JSON.stringify(output_matrix)}
          Given Input Instance:
          ${JSON.stringify(input_instance)}
      `,
      },
    ],
  });
  const [first] = choices;

  console.log("Training output instance is extracted");
  const { output_instance } = Markdown.toJSON(first.message.content);
  return output_instance;
}

module.exports = { declarations, instances };
