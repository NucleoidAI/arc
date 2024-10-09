const openai = require("./openai");
const Matrix = require("./Matrix");
const instruct_dataset = require("../instruct_dataset");
const nucleoid = require("./nucleoid");
const Markdown = require("./Markdown");

async function statements({ train_dataset }) {
  console.log("Analyzing patterns...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: instruct_dataset.analyzer.statements(),
      },
      {
        role: "user",
        content: `
          analysis:
          - Provide detailed analysis of each example
          - Explain shapes, objects etc. in each example
          - Find all relationship between shapes, objects etc. in each example
          - Find all patterns between shapes, objects etc. in each example
          - Provide all rules found in patterns
          - Provide complete details of found shapes and their parts also their formal names
          - Provide declarative logical explanation of patterns found in between input_matrix and output_matrix in given train_dataset
          - Provide complete summery of findings
          instructions:
          - Provide only clear patterns and if found pattern is not certain, skip it without mentioning
          task:
          - Find logical statements based on patterns in between input_matrix and output_matrix in given train_dataset
          train_dataset:
          ${JSON.stringify(train_dataset)}
          return_format:
          { statements: [statements] }
        `,
      },
    ],
  });

  const [first] = choices;
  const { statements } = Markdown.json(first.message.content);

  console.debug("statements:");
  console.debug(statements);

  return { statements };
}

async function declarations({ train_dataset }) {
  console.log("Analyzing declarations...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: instruct_dataset.analyzer.declarations(),
      },
      {
        role: "user",
        content: `
          analysis:
          task:
          - Identify declarations for given statement and train_dataset in Nucleoid Syntax
          train_dataset:
          ${JSON.stringify(train_dataset)}
          return_format:
          { declarations: [NUC_DECLARATIONS] }
        `,
      },
    ],
  });

  const [first] = choices;
  const { declarations } = Markdown.json(first.message.content);

  console.debug("declarations:");
  console.debug(declarations);

  return { declarations };
}

async function instances({
  statements,
  declarations,
  input_matrix,
  output_matrix,
}) {
  console.log("Extracting instances...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          ${instruct_dataset.analyzer.instances()}
        `,
      },
      {
        role: "user",
        content: `
          analysis:
          
          task:
          - Extract each input_instance from given input_matrix based on given statements and declarations
          - Extract each output_instance from given output_matrix based on given statements and declarations
          statements:
          ${JSON.stringify(statements)}
          declarations:
          ${JSON.stringify(declarations)}
          input_matrix:
          ${JSON.stringify(input_matrix)}
          output_matrix:
          ${JSON.stringify(output_matrix)}
          return_format:
          { instances: [ { input_instance: [INPUT_INSTANCES], output_instance: [OUTPUT_INSTANCES] } ] }
        `,
      },
    ],
  });

  const [first] = choices;
  const { instances } = Markdown.json(first.message.content);

  instances.forEach((i) => {
    Matrix.toString(i.input_instance);
    console.debug("");
    Matrix.toString(i.output_instance);
    console.debug("--");
  });
  console.log("");

  return { instances };
}

async function value({
  train_session_id,
  instance_name,
  statements,
  declarations,
  input_instance,
  output_instance,
}) {
  console.log("Calculating instance_value...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: instruct_dataset.analyzer.value(),
      },
      {
        role: "user",
        content: `
          task:
          Create Nucleoid code for given instance
          instance_name:
          ${instance_name}
          statements:
          ${statements.join("\n")}
          declarations:
          ${declarations.join("\n")}
          input_instance:
          ${JSON.stringify(input_instance)}
          output_instance:
          ${JSON.stringify(output_instance)}
          return_format:
          { nuc: "NUCLEOID_CODE" }
        `,
      },
    ],
  });

  const [first] = choices;
  const { nuc } = JSON.parse(first.message.content);

  console.log("Creating instance in Nucleoid...");
  const instance_value = await nucleoid.run(train_session_id, nuc);

  console.debug("nuc:");
  console.debug(nuc);
  console.debug("instance_value:");
  console.debug(instance_value);

  return { nuc, instance_value };
}

module.exports = {
  statements,
  instances,
  declarations,
  value,
};
