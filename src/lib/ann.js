const { v4: uuid } = require("uuid");
const instruct_dataset = require("../instruct_dataset");

const llm = require("./claude");

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
      Respond result in JSON in given json_format without any comments
    `,
  });

  const text = await llm.generate({
    model,
    messages,
    temperature,
    max_tokens,
  });

  return JSON.parse(text);
}

module.exports = { generate };
