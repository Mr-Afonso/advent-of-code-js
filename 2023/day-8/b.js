const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

let instructions = cleanInput[0]
let nodes = cleanInput.slice(2)

let navigate = ""
let count = 0

const findNextElement = (instruction, point) => {

  let nextNode = ""

  count++

  nodes.forEach((node) => {

    let element = node.slice(0, 3)
    let leftElement = node.slice(7, 10)
    let rightElement = node.slice(12, 15)

    if (point === element) {
      if (instruction === "L") {
        nextNode = leftElement
      }

      if (instruction === "R") {
        nextNode = rightElement
      }
    }
  })
  return nextNode
}


const findStarts = () => {

  let starts = []

  nodes.forEach((node) => {

    let element = node.slice(0, 3)

    if (element.includes("A")) {
      starts.push(element)
    }
  })
  return starts

}

let multiple = []

const findZ = (arr) => {

  arr.forEach((el) => {
    let stop = true
    let moveIndex = 0

    while (stop) {

      if (moveIndex === 0 && count === 0) {
        navigate = findNextElement(instructions.split("")[moveIndex], el)
      } else {
        navigate = findNextElement(instructions.split("")[moveIndex], navigate)
      }

      if (navigate.includes("Z")) {
        multiple.push(count)
        stop = false
        count = 0
      }

      if (instructions.split("").length === moveIndex + 1) {
        moveIndex = 0
      } else {
        moveIndex++
      }

    }
  })

}

findZ(findStarts())

// https://en.wikipedia.org/wiki/Least_common_multiple
// https://stackoverflow.com/questions/47047682/least-common-multiple-of-an-array-values-using-euclidean-algorithm

// greatest common divisor
const gcd = function (a, b) {
  return a ? gcd(b % a, a) : b;
}

// least common multiple
const lcm = function (a, b) {
  return a * b / gcd(a, b);
}

console.log("Count:", multiple.reduce(lcm))