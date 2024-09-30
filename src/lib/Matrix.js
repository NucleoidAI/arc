function toString(matrix) {
  matrix.forEach((row) => {
    console.debug(`[${row.join(",")}]`);
  });
}

module.exports = { toString };
