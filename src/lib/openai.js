const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chat({
  model = "gpt-4o-2024-08-06",
  messages = [],
  temperature = 0,
  max_tokens = 5012,
  top_p = 1,
  frequency_penalty = 0,
  presence_penalty = 0,
  response_format = { type: "json_object" },
}) {
  console.info(messages);
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
