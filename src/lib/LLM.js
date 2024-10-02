const dataset = require("../dataset/patterns.json");

function tokens(input) {
  const tokens = input.trim().split(/\s+/);
  return tokens.length;
}

const size = tokens(JSON.stringify(dataset));

console.log(size);
