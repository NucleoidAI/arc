const openai = require("./openai");
const dataset = require("../dataset");
const Markdown = require("./Markdown");
const { v4: uuid } = require("uuid");
const nucleoid = require("./nucleoid");

async function declarations(train) {
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
        ARC Training Documentation: ${dataset.arc}
      `,
    },
    {
      role: "user",
      content: `
        Given Input and Output matrices:
        ${JSON.stringify(train)}
      `,
    },
  ];

  const { choices } = await openai.chat({
    messages,
  });
  const [first] = choices;

  console.log(first.message.content);
  const { declarations } = Markdown.toJSON(first.message.content);
  console.debug(declarations);
  console.log("Declarations parsed");

  return declarations.join("\n");
}

async function instances(declarations, matrices) {
  console.log("Analyzing train instances...");
  console.log(`${matrices.length} matrices to analyze`);
  console.log("");

  const instances = [];
  let index1 = 1;

  for (const { input, output } of matrices) {
    const sessionId = uuid();
    console.log(`Input Matrix ${index1++}`);
    console.debug(JSON.stringify(input));
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
            ${JSON.stringify(input)}
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
      console.debug(`Input Instance ${index2++}: ${JSON.stringify(instance)}`);

      instance.output_instance = await output_instance(
        declarations,
        input,
        output,
        input_instance
      );
    }

    console.log("");
    instances.push(...result.instances);
  }

  console.log("Input and Output Instances are extracted");
  return instances;
}

async function output_instance(declaration, input, output, input_instance) {
  console.log("Extracting output instance...");
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
          ARC Training Documentation: ${dataset.arc}
      `,
      },
      {
        role: "user",
        content: `
          Declarations:
          ${declarations}
          Given Input Matrix:
          ${JSON.stringify(input)}
          Given Output Matrix:
          ${JSON.stringify(output)}
          Given Input Instance:
          ${JSON.stringify(input_instance)}
      `,
      },
    ],
  });
  const [first] = choices;

  console.log("Output found:");
  console.debug(JSON.stringify(Markdown.toJSON(first.message.content)));

  return Markdown.toJSON(first.message.content);
}

module.exports = { declarations, instances };
