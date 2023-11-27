// const createMatrix = require('../helpers/createMatrix')
// const cleanInput = input.split('\n')
// console.log(createMatrix(cleanInput))

let matrix = []

const createMatrix = (input) => {

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    matrix[index] = []

    for (let z = 0; z < element.length; z++) {
      const elementz = element[z];
      matrix[index][z] = Number(elementz)
    }
  }

  return matrix
}

module.exports = createMatrix