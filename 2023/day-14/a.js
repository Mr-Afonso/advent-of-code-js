const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\n")

let matrix = []

// create matrix
for (let index = 0; index < cleanInput.length; index++) {
  const element = cleanInput[index]
  matrix[index] = []

  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]
    matrix[index][z] = elementz
  }
}

// tilt  matrix
for (let index = 0; index < matrix.length; index++) {
  const element = matrix[index]

  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]

    // time to go up
    if (elementz === "O") {
      for (let y = index; y >= 0; y--) {

        const elementy = matrix[y][z]

        if (elementy === "#") {
          y = -1
        }

        if (elementy === "O") {
          if (y - 1 >= 0 && matrix[y - 1][z] === ".") {
            matrix[y][z] = "."
            matrix[y - 1][z] = "O"
          }
        }
      }
    }
  }
}

let sum = 0

// sum rounded rocks 
for (let index = 0; index < matrix.length; index++) {
  const element = matrix[index]


  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]

    if (elementz === "O") {
      sum += matrix.length - index
    }

  }
}

// console.table(matrix)
console.log("Sum:", sum)


