function toString(text, format = "nuc") {
  return text
    .match(new RegExp(`\`\`\`${format}\\s([\\s\\S]*?)\`\`\``, "g"))
    .map((codeBlock) =>
      codeBlock.replace(new RegExp(`\`\`\`${format}|\`\`\``, "g"), "").trim()
    )
    .join("\n");
}

function toJSON(text) {
  const string = toString(text, "json");
  return JSON.parse(string);
}

module.exports = { toString, toJSON };
