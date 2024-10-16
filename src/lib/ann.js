const { v4: uuid } = require("uuid");
const instruct_dataset = require("../instruct_dataset");

let llm;

if (process.env.LLM === "CLAUDE") {
  llm = require("./claude");
}

if (process.env.LLM === "OPENAI") {
  llm = require("./openai");
}

if (process.env.LLM === "GEMINI") {
  llm = require("./gemini");
}

if (process.env.LLM === "MISTRAL") {
  llm = require("./mistral");
}

async function generate({ model, messages = [], temperature = 0, max_tokens }) {
  messages.unshift({
    role: "user",
    content: instruct_dataset.document(),
  });
  messages.unshift({
    role: "user",
    content: `
      control_id:
      ${uuid()}
      instruction:
      Respond in given json_format without any comments
    `,
  });

  const text = await llm.generate({
    model,
    messages,
    temperature,
    max_tokens,
  });

  try {
    return JSON.parse(text);
  } catch (err) {
    throw SyntaxError("JSON Error: " + text);
  }
}

module.exports = { generate };
