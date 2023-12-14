// rotate a matrix (2d array) clockwise without libraries
// not square

const rotateMatrixClockwise = (matrix) => {
  const numRows = matrix.length
  const numCols = matrix[0].length

  // Create a new matrix with swapped rows and columns
  const rotatedMatrix = new Array(numCols).fill(null).map(() => [])

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      rotatedMatrix[j][numRows - 1 - i] = matrix[i][j]
    }
  }

  return rotatedMatrix
}

// Example usage:
const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]

const rotatedMatrix = rotateMatrixClockwise(originalMatrix)
console.table(rotatedMatrix)