const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")


let instructions = cleanInput[0]
let nodes = cleanInput.slice(2)

// Starting with AAA
// until you reach ZZZ

let navigate = ""
let count = 0

// instruction (ex: L)
// point (ex: CCC)
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

let stop = true
let moveIndex = 0

while (stop) {

  if (moveIndex === 0 && count === 0) {
    navigate = findNextElement(instructions.split("")[moveIndex], "AAA")
  } else {
    navigate = findNextElement(instructions.split("")[moveIndex], navigate)
  }

  if (navigate === "ZZZ") {
    stop = false
  }

  if (instructions.split("").length === moveIndex + 1) {
    moveIndex = 0
  } else {
    moveIndex++
  }

}

console.log("Count:", count)