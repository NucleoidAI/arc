console.debug = (message) => {
  process.stdout.write(`\x1b[32m${message}\x1b[0m\n`);
};

require.extensions[".md"] = function (module, filename) {
  const fs = require("fs");
  module.exports = fs.readFileSync(filename, "utf8").trim();
};

const { v4: uuid } = require("uuid");
const { train, test } = require("./data/training/3aa6fb7a.json");
const analyzer = require("./lib/analyzer");

async function start() {
  const context = {
    session: {
      train: uuid(),
      test: uuid(),
    },
    train,
    test,
    declarations: null,
    instances: {
      train: null,
      test: null,
    },
  };

  context.declarations = await analyzer.declarations(context.train);
  context.instances.train = await analyzer.instances(
    context.declarations,
    context.train.map((item) => item.output)
  );
}

module.exports = start;
