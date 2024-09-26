const openai = require("./openai");
const dataset = require("../dataset");
const Nuc = require("./Nuc");
const Markdown = require("./Markdown");
const { v4: uuid } = require("uuid");
const nucleoid = require("./nucleoid");

async function declarations(train) {
  console.log("Analyzing declarations...");
  const messages = [
    {
      role: "system",
      content:
        // Find patterns?
        "Extract declarations without instances for the task in Nucleoid Syntax",
    },
    {
      role: "system",
      content: "Provide only code without any comments or descriptions",
    },
    {
      role: "user",
      content: `
        Documentation: ${dataset.nucleoid}
        Training: ${dataset.arc}
      `,
    },
    {
      role: "assistant",
      content: `
        Task: ${JSON.stringify(train)}
      `,
    },
  ];

  const { choices } = await openai.chat({
    messages,
  });
  const [first] = choices;

  console.debug(Nuc.toString(first.message.content));
  console.log("Declarations parsed");

  return Nuc.toString(first.message.content);
}

async function instances(declarations, outputs) {
  console.log("Analyzing instances...");
  console.log(`${outputs.length} output matrices to analyze`);
  console.log("");

  const instances = [];
  let index1 = 1;

  for (const output of outputs) {
    const sessionId = uuid();
    console.log(`Output Matrix ${index1++}`);
    console.debug(JSON.stringify(output));
    console.log("Initializing Nucleoid session with declarations...");
    await nucleoid.run(sessionId, declarations);

    const messages = [
      {
        role: "system",
        content: `
      - Extract each instance based on declarations for the task in Nucleoid Syntax
      - Return instances in JSON format as { "instances": [ { arc: [ARC], nuc: [NUCLEOID_CODE] }, ... ] }
      - ARC matrix should be in original size and it should contain only 1 instance 
      - Apply for all instances`,
      },
      {
        role: "user",
        content: `
        Documentation: ${dataset.nucleoid}
        Training: ${dataset.arc}
      `,
      },
      {
        role: "assistant",
        content: `
        Declarations:
        ${declarations}
        Task:
        ${JSON.stringify(output)}
      `,
      },
    ];

    const { choices } = await openai.chat({
      messages,
    });
    const [first] = choices;

    let index2 = instances.length + 1;
    const result = Markdown.toJSON(first.message.content);

    for (const instance of result.instances) {
      console.log("Creating instance in Nucleoid...");
      instance.value = await nucleoid.run(sessionId, instance.nuc);
      console.debug(`Instance ${index2++}: ${JSON.stringify(instance)}`);
    }

    console.log("");
    instances.push(...result.instances);
  }

  console.log("Instances extracted");
  return instances;
}

module.exports = { declarations, instances };
