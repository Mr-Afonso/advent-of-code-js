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

// tilt up matrix
const tiltMatrixUp = (inputMatrix) => {
  for (let index = 0; index < inputMatrix.length; index++) {
    const element = inputMatrix[index]

    for (let z = 0; z < element.length; z++) {
      const elementz = element[z]

      // time to go up
      if (elementz === "O") {
        for (let y = index; y >= 0; y--) {

          const elementy = inputMatrix[y][z]

          if (elementy === "#") {
            y = -1
          }

          if (elementy === "O") {
            if (y - 1 >= 0 && inputMatrix[y - 1][z] === ".") {
              matrix[y][z] = "."
              matrix[y - 1][z] = "O"
            }
          }
        }
      }
    }
  }
}

// tilt left matrix
const tiltMatrixLeft = (inputMatrix) => {
  for (let index = 0; index < inputMatrix.length; index++) {
    const element = inputMatrix[index]

    for (let z = 0; z < element.length; z++) {
      const elementz = element[z]

      // time to go left
      if (elementz === "O") {
        for (let y = z; y >= 0; y--) {

          const elementy = inputMatrix[index][y]

          if (elementy === "#") {
            y = -1
          }

          if (elementy === "O") {
            if (y - 1 >= 0 && inputMatrix[index][y - 1] === ".") {
              matrix[index][y] = "."
              matrix[index][y - 1] = "O"
            }
          }
        }
      }
    }
  }
}

// tilt down matrix
const tiltMatrixDown = (inputMatrix) => {
  // fake way to move all stones to the right. 
  // why 4 times? well, see the stones as blocks 
  for (let yyy = 0; yyy < 3; yyy++) {
    for (let index = 0; index < inputMatrix.length; index++) {
      const element = inputMatrix[index]

      for (let z = 0; z < element.length; z++) {
        const elementz = element[z]

        // time to go down
        if (elementz === "O") {
          for (let y = index; y < inputMatrix.length; y++) {

            const elementy = inputMatrix[y][z]

            if (elementy === "#") {
              y = inputMatrix.length
            }

            if (elementy === "O") {
              if (y + 1 < inputMatrix.length && inputMatrix[y + 1][z] === ".") {
                matrix[y][z] = "."
                matrix[y + 1][z] = "O"
              }
            }
          }
        }
      }
    }
  }
}

// tilt right matrix
const tiltMatrixRight = (inputMatrix) => {
  // fake way to move all stones to the right. 
  // why 4 times? well, see the stones as blocks 
  for (let yyy = 0; yyy < 4; yyy++) {
    for (let index = 0; index < inputMatrix.length; index++) {
      const element = inputMatrix[index]

      for (let z = 0; z < element.length; z++) {
        const elementz = element[z]

        // time to go right
        if (elementz === "O") {
          for (let y = z; y < element.length; y++) {

            const elementy = inputMatrix[index][y]

            if (elementy === "#") {
              y = element.length
            }

            if (elementy === "O") {
              if (y + 1 < element.length && inputMatrix[index][y + 1] === ".") {
                matrix[index][y] = "."
                matrix[index][y + 1] = "O"
              }
            }
          }
        }
      }
    }

  }
}

let cycles = 1
let totalLoad = 0
let arrTotalLoad = []

// run 1000x to check loop
while (cycles <= 1000) {

  // 1 cycle
  // up
  tiltMatrixUp(matrix)
  // left
  tiltMatrixLeft(matrix)
  // down
  tiltMatrixDown(matrix)
  // right
  tiltMatrixRight(matrix)

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

  totalLoad = sum
  arrTotalLoad.push(sum)
  cycles++

}

let cycleSize = 0
let startCycle = 0

// this assumes that the end of a loop is = to the start
const hasLoop = (arr) => {

  let tortoise = arr[0]
  let hare = arr[0]

  let index = 0
  let count = 0

  let arrIndex = []

  while (true) {
    tortoise = arr[index]
    hare = arr[index + 1]

    if (tortoise === undefined || hare === undefined) {
      return false // No loop found
    }

    if (tortoise === hare) {
      arrIndex.push(index)
      count++
    }

    if (count > 4) {
      cycleSize = arrIndex[arrIndex.length - 1] - arrIndex[arrIndex.length - 2]
      startCycle = arrIndex[0]
      return true // Loop detected
    }

    index++
  }
}

hasLoop(arrTotalLoad)

// greatest common divisor
const gcd = function (a, b) {
  return a ? gcd(b % a, a) : b;
}

const greatestDivisor = gcd((1000000000 - startCycle - 1000), cycleSize)

while (cycles <= startCycle + greatestDivisor) {

  // 1 cycle
  // up
  tiltMatrixUp(matrix)
  // left
  tiltMatrixLeft(matrix)
  // down
  tiltMatrixDown(matrix)
  // right
  tiltMatrixRight(matrix)

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

  totalLoad = sum
  arrTotalLoad.push(sum)
  cycles = cycles + cycleSize

}

console.log("Sum:", totalLoad)
