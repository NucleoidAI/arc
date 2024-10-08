const OpenAI = require("openai");
const instruct_dataset = require("../instruct_dataset");
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
  response_format = { type: "text" },
}) {
  messages.unshift({
    role: "system",
    content: `
      - Conduct comprehensive analysis for given task before working on given task
      - Consider items in given analysis sequentially while analyzing
      - Apply given instructions if any
      - Provide final return in given return_format
    `,
  });
  messages.unshift({
    role: "system",
    content: `
      Motto: ALWAYS THINK ALOUD
    `,
  });

  console.info(JSON.stringify(messages));
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
