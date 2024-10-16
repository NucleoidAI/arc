function json(markdown) {
  const matches = [...markdown.matchAll(/```json([^`]+)```/g)];

  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    return lastMatch[1];
  }
}

module.exports = { json };
