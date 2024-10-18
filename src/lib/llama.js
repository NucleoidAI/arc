const axios = require("axios").default;

async function generate({ messages = [] }) {
  const response = await axios({
    method: "POST",
    url: `http://${process.env.LLAMA_HOST}/generate`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      input: messages.map((m) => m.content).join("\n"),
    },
  });

  return response.data;
}

module.exports = { generate };
