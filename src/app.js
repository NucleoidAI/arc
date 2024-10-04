console.info = (message) => {
  let string = message;

  if (typeof message !== "string") {
    string = JSON.stringify(message);
  }

  if (message === undefined) {
    string = "undefined";
  }

  if (message === null) {
    string = "null";
  }

  process.stdout.write(`\x1b[34m${string}\x1b[0m\n`);
};

console.debug = (message) => {
  let string = message;

  if (typeof message !== "string") {
    string = JSON.stringify(message);
  }
  if (message === undefined) {
    string = "undefined";
  }

  if (message === null) {
    string = "null";
  }

  process.stdout.write(`\x1b[2m${string}\x1b[0m\n`);
};

console.log("🌿 \x1b[32mNucleoid\x1b[0m system is started");
console.log("\x1b[34m🌎 Inspired by Nature\x1b[0m\n");

require.extensions[".md"] = (module, filename) => {
  const fs = require("fs");
  module.exports = fs.readFileSync(filename, "utf8").trim();
};

// ---

const analyzer = require("./lib/analyzer");
const visualizer = require("./lib/visualizer");
const nucleoid = require("./lib/nucleoid");
const { v4: uuid } = require("uuid");
const debug = require("./debug");

const {
  train,
  test: [{ input: test_input_matrix, output: test_output_matrix }],
} = require("./data/training/3aa6fb7a.json"); //0ca9ddb6
const Matrix = require("./lib/Matrix");

const train_dataset = train.map(({ input, output }) => ({
  input_matrix: input,
  output_matrix: output,
}));

// const train_dataset = require("./dataset/training.core.json").dataset.map(
//   ({ input_matrix, output_matrix }) => ({ input_matrix, output_matrix })
// );

async function start() {
  const train_session_id = uuid();
  const train_instances = [];

  const { patterns } = await analyzer.patterns({ train_dataset });

  const { declarations } = await analyzer.declarations({
    train_dataset,
    patterns,
  });

  console.log("Creating declarations in Nucleoid...");
  await nucleoid.run(train_session_id, declarations.join("\n"));

  for (const { input_matrix, output_matrix } of train_dataset) {
    const { instances } = await analyzer.instances({
      patterns,
      input_matrix,
      output_matrix,
    });

    for (const { input_instance, output_instance } of instances) {
      const { nuc, instance_value } = await analyzer.value({
        instance_name: `obj${train_instances.length}`,
        train_session_id,
        declarations,
        input_instance,
        output_instance,
      });

      train_instances.push({
        input_instance,
        output_instance,
        nuc,
        instance_value,
      });
    }
  }

  /* Visualizing */

  const test_session_id = uuid();
  const test_instances = [];

  console.log("Initializing Nucleoid session with declarations...");
  await nucleoid.run(test_session_id, declarations.join("\n"));

  const { instances } = await visualizer.instances({
    patterns,
    declarations,
    train_dataset,
    train_instances,
    test_input_matrix,
  });

  for (const { input_instance } of instances) {
    const { nuc, instance_value } = await visualizer.value({
      instance_name: `obj${test_instances.length}`,
      test_session_id,
      declarations,
      train_dataset,
      train_instances,
      test_input_instance: input_instance,
    });

    const { output_instance } = await visualizer.output_instance({
      patterns,
      declarations,
      train_dataset,
      train_instances,
      test_input_instance: input_instance,
      instance_value,
    });

    test_instances.push({
      input_instance,
      output_instance,
      nuc,
      instance_value,
    });
  }

  let background = test_input_matrix;

  for (const { input_instance } of instances) {
    background = Matrix.subtract(background, input_instance);
  }

  const result = Matrix.merge(
    background,
    ...test_instances.map((i) => i.output_instance)
  );

  console.debug("Result:");
  Matrix.toString(result);
  console.debug("Expected:");
  Matrix.toString(test_output_matrix);
  return result;
}

module.exports = start;
