function toString(text) {
  return text
    .match(/```nuc\s([\s\S]*?)```/g)
    .map((codeBlock) => codeBlock.replace(/```nuc|```/g, "").trim())
    .join("\n");
}

module.exports = { toString };
