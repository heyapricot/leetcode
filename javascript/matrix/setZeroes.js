const setZeroes = (matrix) => {
  let firstCol = false;

  if (matrix.length > 0) {
    matrix.forEach((row, i) => {
      if (row[0] === 0) firstCol = true;

      for (let j = 1; j < row.length; j += 1) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    });

    for (let i = 1; i < matrix.length; i += 1) {
      if (matrix[i][0] === 0) {
        for (let j = 1; j < matrix[i].length; j += 1) {
          matrix[i][j] = 0;
        }
      }
    }

    for (let j = 1; j < matrix[0].length; j += 1) {
      if (matrix[0][j] === 0) {
        for (let i = 1; i < matrix.length; i += 1) {
          matrix[i][j] = 0;
        }
      }
    }

    if (matrix[0][0] === 0) {
      for (let i = 0; i < matrix[0].length; i += 1) matrix[0][i] = 0;
    }

    if (firstCol) {
      for (let i = 0; i < matrix.length; i += 1) matrix[i][0] = 0;
    }
  }
};

const matrix = [[1,1,1],[0,1,2]]

setZeroes(matrix);

console.log(matrix);
