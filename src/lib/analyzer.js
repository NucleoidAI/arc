const openai = require("./openai");
const Matrix = require("./Matrix");
const instruct_dataset = require("../instruct_dataset");
const nucleoid = require("./nucleoid");
const Markdown = require("./Markdown");
const Zoom = require("./Zoom");

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
          - Identify declarative statements for train_dataset in Nucleoid Syntax
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

async function instances({ declarations, input_matrix, output_matrix }) {
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
          task:
          - Extract each input_instance from given input_matrix based on given declarative statements in declarations
          - Extract each output_instance from given output_matrix based on given declarative statements in declarations
          declarations:
          ${JSON.stringify(declarations)}
          input_matrix:
          ${JSON.stringify(input_matrix)}
          output_matrix:
          ${JSON.stringify(output_matrix)}
          return_format:
          { instances: [ { input_object: [INPUT_OBJECT], output_object: [OUTPUT_OBJECT], input_instance: [INPUT_INSTANCES], output_instance: [OUTPUT_INSTANCES] } ] }
        `,
      },
    ],
  });

  const [first] = choices;
  const { instances } = Markdown.json(first.message.content);

  instances.forEach((instance) => {
    const { input_instance, output_instance } = instance;
    instance.input_object = Zoom.focus(input_instance);
    instance.output_object = Zoom.focus(output_instance);
  });

  instances.forEach((instance) => {
    Matrix.toString(instance.input_instance);
    console.debug(
      JSON.stringify({
        x_position: instance.input_object.x_position,
        y_position: instance.input_object.y_position,
      })
    );
    Matrix.toString(instance.input_object.object_matrix);
    Matrix.toString(instance.output_instance);
    console.debug(
      JSON.stringify({
        x_position: instance.output_object.x_position,
        y_position: instance.output_object.y_position,
      })
    );
    Matrix.toString(instance.output_object.object_matrix);
    console.debug("--");
  });
  console.log("");

  return { instances };
}

async function value({
  train_session_id,
  instance_name,
  declarations,
  input_object,
  output_object,
}) {
  console.log("Calculating value...");

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
          Create Nucleoid code for given object based on declarations
          instance_name:
          ${instance_name}
          declarations:
          ${declarations.join("\n")}
          input_object:
          ${JSON.stringify(input_object)}
          output_object:
          ${JSON.stringify(output_object)}
          return_format:
          { input_code: "NUCLEOID_CODE" }
        `,
      },
    ],
  });

  const [first] = choices;
  const { input_code } = Markdown.json(first.message.content);

  console.log("Creating instance in Nucleoid...");
  const output_value = await nucleoid.run(train_session_id, input_code);

  console.debug("input_code:");
  console.debug(input_code);
  console.debug("output_value:");
  console.debug(output_value);

  return { input_code, output_value };
}

module.exports = {
  instances,
  declarations,
  value,
};
