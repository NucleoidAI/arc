console.debug = (message) => {
  process.stdout.write(`\x1b[2m${message}\x1b[0m\n`);
};

console.info = (message) => {
  let string = message;

  if (typeof message !== "string") {
    string = JSON.stringify(message);
  }
  process.stdout.write(`\x1b[34m${string}\x1b[0m\n`);
};

console.log("🌿 \x1b[32mNucleoid\x1b[0m system is started");
console.log("\x1b[34m🌎 Inspired by Nature\x1b[0m\n");

require.extensions[".md"] = (module, filename) => {
  const fs = require("fs");
  module.exports = fs.readFileSync(filename, "utf8").trim();
};

const {
  train,
  test: [{ input: test_matrix }],
} = require("./data/training/3aa6fb7a.json");
const analyzer = require("./lib/analyzer");
const visualizer = require("./lib/visualizer");

async function start() {
  const declarations = await analyzer.declarations(train);
  console.info("Declarations:");
  console.info(declarations);
  const train_instances = await analyzer.instances(declarations, train);
  const test_instances = await visualizer.instances(
    declarations,
    train,
    train_instances,
    test_matrix
  );

  console.info("Train Instances:");
  console.info(train_instances);

  const result = visualizer.merge(
    ...test_instances.map((i) => i.output_instance)
  );
  console.info("Result:");
  console.info(result);
}

module.exports = start;
