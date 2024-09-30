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

const {
  train,
  test: [{ input: test_input_matrix }],
} = require("./data/training/3aa6fb7a.json");
const Matrix = require("./lib/Matrix");

const training_dataset = train.map(({ input, output }) => ({
  input_matrix: input,
  output_matrix: output,
}));

const analyzer = require("./lib/analyzer");
const visualizer = require("./lib/visualizer");

async function start() {
  const declarations = await analyzer.declarations(training_dataset);

  const train_instances = await analyzer.instances(
    declarations,
    training_dataset
  );

  const test_instances = await visualizer.instances(
    declarations,
    training_dataset,
    train_instances,
    test_input_matrix
  );

  const result = visualizer.merge(
    ...test_instances.map((i) => i.output_instance)
  );

  console.debug("Result:");
  Matrix.toString(result);
  return result;
}

module.exports = start;
