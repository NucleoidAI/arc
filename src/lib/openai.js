const OpenAI = require("openai");
require("dotenv").config();

const { v4: uuid } = require("uuid");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chat({
  model = "gpt-4o-2024-08-06", // gpt-4o-mini-2024-07-18
  messages = [],
  temperature = 0,
  max_tokens = 5012,
  top_p = 1,
  frequency_penalty = 0,
  presence_penalty = 0,
  response_format = { type: "text" },
}) {
  messages.unshift({
    role: "user",
    content: `
      control_id:
      ${uuid()}
      instruction:
      Provide final result in JSON as Markdown with given json_format without any comments
    `,
  });

  return openai.chat.completions.create({
    model,
    messages,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
    response_format,
  });
}

module.exports = { chat };
