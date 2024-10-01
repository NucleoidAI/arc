const openai = require("./openai");
const Markdown = require("./Markdown");
const Matrix = require("./Matrix");
const dataset = require("../dataset");
const nucleoid = require("./nucleoid");

async function patterns({ training_dataset }) {
  console.log("Analyzing patterns...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Provide logical explanation of patterns found in between "input_matrix" and "output_matrix" given dataset for redrawing as "patterns"
          - Return in JSON format as { patterns: "PATTERNS_EXPLANATION" }
          `,
      },
      {
        role: "user",
        content: `
        Given Dataset
        ${JSON.stringify(training_dataset)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { patterns } = Markdown.toJSON(first.message.content);

  console.debug("Patterns:");
  console.debug(patterns);

  return { patterns };
}

async function instances({ patterns, input_matrix, output_matrix }) {
  console.log("Extracting instances...");

  const patterns_dataset = require("../dataset/patterns.json").map(
    ({ input_matrix, output_matrix, instances }) => {
      return {
        input_matrix,
        output_matrix,
        instances: instances.map(({ input_instance }) => ({
          input_instance,
        })),
      };
    }
  );

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Extract each input_instance from given input_matrix
          - Extract each output_instance from given output_matrix
          - Return in JSON format as { instances: [ { input_instance: [INPUT_INSTANCE], output_instance: [OUTPUT_INSTANCE] } ] }
          `,
      },
      {
        role: "user",
        content: `
          Training:
          - input_matrix is inserted matrix
          - output_matrix is converted matrix from inserted matrix
          - input_instance contains an instance in input_matrix based on found pattern in between input_matrix and output_matrix
          - input_instance must contain only 1 instance of found pattern
          - input_instance must be filled rest of empty spaces with 0s
          - input_instance must have in same dimension with its input_matrix
          - output_instance contains an corresponding instance in output_matrix based on found pattern in between input_matrix and output_matrix
          - output_instance must contain only 1 instance of found pattern
          - output_instance must be filled rest of empty spaces with 0s
          - output_instance must have in same dimension with its output_matrix
          ${JSON.stringify(patterns_dataset)}
          `,
      },
      {
        role: "user",
        content: `
        Pattern:
        ${patterns}
        Given input_matrix:
        ${JSON.stringify(input_matrix)}
        Given output_matrix:
        ${JSON.stringify(output_matrix)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { instances } = Markdown.toJSON(first.message.content);

  instances.forEach((i) => {
    Matrix.toString(i.input_instance);
    console.debug("");
    Matrix.toString(i.output_instance);
    console.debug("--");
  });
  console.log("");

  return { instances };
}

async function declarations({ training_dataset, patterns }) {
  console.log("Analyzing declarations...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Identify declarations for given matrix dataset in Nucleoid Syntax
          - Return declarations in JSON format as { declarations: [NUC_DECLARATIONS] },
          `,
      },
      {
        role: "user",
        content: `
          Nucleoid Documentation: ${dataset.nucleoid}
          ARC Documentation: ${dataset.declarations}
      `,
      },
      {
        role: "user",
        content: `
          Given Matrix Dataset:
          ${JSON.stringify(training_dataset)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { declarations } = Markdown.toJSON(first.message.content);

  console.debug("Declarations:");
  console.debug(declarations);

  return { declarations };
}

async function value({
  instance_name,
  training_session_id,
  declarations,
  input_instance,
  output_instance,
}) {
  console.log("Analyzing declarations...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Create Nucleoid code for given instance 
          - Return instances in JSON format as { nuc: [NUCLEOID_CODE] }
          `,
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
          instance_name:
          ${instance_name}
          Declarations:
          ${JSON.stringify(declarations)}
          Given Input Instance:
          ${JSON.stringify(input_instance)}
          Given Output Instance:
          ${JSON.stringify(output_instance)}
          `,
      },
    ],
  });

  const [first] = choices;
  const { nuc } = Markdown.toJSON(first.message.content);

  console.log("Creating instance in Nucleoid...");
  const instance_value = await nucleoid.run(training_session_id, nuc);

  console.debug("nuc:");
  console.debug(nuc);
  console.debug("Value:");
  console.debug(instance_value);

  return { nuc, instance_value };
}

module.exports = { patterns, instances, declarations, value };
