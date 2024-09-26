const axios = require("axios").default;

async function chat({
  model = "mistral-tiny",
  messages = [],
  max_tokens = 512,
}) {
  const response = await axios({
    method: "POST",
    url: "https://api.mistral.ai/v1/chat/completions",
    headers: {
      Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: {
      model,
      messages,
      temperature: 0,
      top_p: 1,
      max_tokens,
      stream: false,
      safe_prompt: true,
      random_seed: null,
    },
  });

  return response.data;
}

module.exports = { chat };
