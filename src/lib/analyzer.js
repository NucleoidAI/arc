const openai = require("./openai");
const Matrix = require("./Matrix");
const instruct_dataset = require("../instruct_dataset");
const nucleoid = require("./nucleoid");

async function patterns({ train_dataset }) {
  console.log("Analyzing patterns...");

  const { choices } = await openai.chat({
    max_tokens: 5012,
    response_format: {
      type: "text",
    },
    messages: [
      {
        role: "system",
        content: `
          - Provide detailed analysis of each example 
          - Provide logical explanation of patterns found in between input_matrix and output_matrix in given train_dataset for redrawing
          - Provide all rules found in patterns for redrawing
          - Provide complete details of found shapes and their parts also their formal names
          - Provide complete summery of findings
          - Provide only clear patterns and if found pattern is not certain, skip it without mentioning
        `,
      },
      {
        role: "system",
        content: instruct_dataset.analyzer.patterns(),
      },
      {
        role: "user",
        content: `
          train_dataset:
          ${JSON.stringify(train_dataset)}
        `,
      },
    ],
  });

  const [first] = choices;
  const patterns = first.message.content;

  console.debug("patterns:");
  console.debug(patterns);

  return { patterns };
}

async function declarations({ train_dataset, patterns }) {
  console.log("Analyzing declarations...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Identify declarations for given train_dataset in Nucleoid Syntax
          - Use instruct_dataset as a reference
          - Return in JSON format as { declarations: [NUC_DECLARATIONS] }
        `,
      },
      {
        role: "system",
        content: instruct_dataset.analyzer.declarations(),
      },
      {
        role: "user",
        content: `
          patterns:
          ${patterns}
          train_dataset:
          ${JSON.stringify(train_dataset)}
        `,
      },
    ],
  });

  const [first] = choices;
  const { declarations } = JSON.parse(first.message.content);

  console.debug("declarations:");
  console.debug(declarations);

  return { declarations };
}

async function instances({
  patterns,
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
          - Extract each input_instance from given input_matrix based on given patterns
          - Extract each output_instance from given output_matrix based on given patterns
          - Use instruct_dataset as a reference
          - Return in JSON format as { instances: [ { input_instance: [INPUT_INSTANCES], output_instance: [OUTPUT_INSTANCES] } ] }
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
          - output_instance contains an corresponding instance in output_matrix based on found pattern in between input_matrix and output_matrix
          - output_instance must contain only 1 instance of found pattern
          - output_instance must be filled rest of empty spaces with 0s
          - output_instance must have in same dimension with its output_matrix
          ${instruct_dataset.analyzer.instances()}
        `,
      },
      {
        role: "user",
        content: `
          patterns:
          ${patterns}          
          train_dataset:
          ${JSON.stringify({
            declarations,
            dataset: [{ input_matrix, output_matrix }],
          })}
        `,
      },
    ],
  });

  const [first] = choices;
  const { instances } = JSON.parse(first.message.content);

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
  instance_name,
  train_session_id,
  declarations,
  input_instance,
  output_instance,
}) {
  console.log("Calculating instance_value...");

  const { choices } = await openai.chat({
    messages: [
      {
        role: "system",
        content: `
          - Create Nucleoid code for given instance
          - Use instruct_dataset as a reference
          - Return in JSON format as { nuc: "NUCLEOID_CODE" }
        `,
      },

      {
        role: "system",
        content: instruct_dataset.analyzer.value(),
      },
      {
        role: "user",
        content: `
          instance_name:
          ${instance_name}
          declarations:
          ${declarations.join("\n")}
          input_instance:
          ${JSON.stringify(input_instance)}
          output_instance:
          ${JSON.stringify(output_instance)}
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
  patterns,
  instances,
  declarations,
  value,
};
