function focus(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let xOffset = -1,
    yOffset = -1,
    xLength = 0,
    yLength = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] !== 0) {
        if (yOffset === -1) {
          yOffset = i;
        }
        yLength = Math.max(yLength, i - yOffset + 1);

        if (xOffset === -1 || j < xOffset) {
          xOffset = j;
        }
        xLength = Math.max(xLength, j - xOffset + 1);
      }
    }
  }

  const object = matrix
    .slice(yOffset, yOffset + yLength)
    .map((row) => row.slice(xOffset, xOffset + xLength));

  return {
    x_position: xOffset,
    y_position: yOffset,
    matrix: object,
  };
}

module.exports = { focus };
