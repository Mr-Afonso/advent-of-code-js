// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\n")
// const cleanInput = input.split("\r\n")

// console.log(cleanInput)

let matrix = []

for (let index = 0; index < 7000; index++) {
  matrix[index] = []

  for (let z = 0; z < 7000; z++) {
    matrix[index][z] = "."
  }
}

let currentCoord = [3500, 3500]

cleanInput.forEach((element) => {

  let direction = element.split(" ")[0]
  let size = Number(element.split(" ")[1])

  if (direction === "R") {

    for (let indexR = 0; indexR < size; indexR++) {

      currentCoord[1]++

      matrix[currentCoord[0]][currentCoord[1]] = "#"

    }

  }

  if (direction === "D") {

    for (let indexD = 0; indexD < size; indexD++) {

      currentCoord[0]++

      matrix[currentCoord[0]][currentCoord[1]] = "#"

    }

  }

  if (direction === "L") {

    for (let indexL = 0; indexL < size; indexL++) {

      currentCoord[1]--
      matrix[currentCoord[0]][currentCoord[1]] = "#"

    }

  }

  if (direction === "U") {

    for (let indexU = 0; indexU < size; indexU++) {

      currentCoord[0]--

      matrix[currentCoord[0]][currentCoord[1]] = "#"

    }

  }

})


for (let index = 0; index < matrix.length; index++) {
  const element = matrix[index]

  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]

    let leftSide = false
    let rightSide = false
    let upSide = false
    let downSide = false

    if (elementz === ".") {

      // check left side
      for (let leftIndex = z - 1; leftIndex >= 0; leftIndex--) {

        if (matrix[index][leftIndex] === "#") {
          leftSide = true
        }

      }

      // check right side
      for (let rightIndex = z + 1; rightIndex < element.length; rightIndex++) {

        if (matrix[index][rightIndex] === "#") {
          rightSide = true
        }

      }

      // up side
      for (let upIndex = index - 1; upIndex >= 0; upIndex--) {

        if (matrix[upIndex][z] === "#") {
          upSide = true
        }

      }
      // downside
      for (let downIndex = index + 1; downIndex < matrix.length; downIndex++) {

        if (matrix[downIndex][z] === "#") {
          downSide = true
        }

      }

      if (leftSide && rightSide && upSide && downSide) {
        matrix[index][z] = "#"
      }

    }

  }
}

let count = 0

for (let index = 0; index < matrix.length; index++) {
  const element = matrix[index]


  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]
    if (elementz === "#") {
      count++
    }
    console.log('test', count)
  }
}

console.log('Count:', count)
