function merge(...matrices) {
  const numRows = matrices[0].length;
  const numCols = matrices[0][0].length;

  let result = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  for (let matrix of matrices) {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (matrix[i][j] !== 0) {
          result[i][j] = matrix[i][j];
        }
      }
    }
  }

  return result;
}

function subtract(matrix1, matrix2) {
  const rows = matrix1.length;
  const cols = matrix1[0].length;

  // Ensure both matrices have the same dimensions
  if (matrix2.length !== rows || matrix2[0].length !== cols) {
    throw new Error("Matrices must have the same dimensions for subtraction");
  }

  // Initialize a result matrix
  let result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Perform element-wise subtraction
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrix1[i][j] - matrix2[i][j];
    }
  }

  return result;
}

function toString(matrix) {
  matrix.forEach((row) => {
    console.debug(`[${row.join(",")}]`);
  });
}

module.exports = { merge, subtract, toString };
