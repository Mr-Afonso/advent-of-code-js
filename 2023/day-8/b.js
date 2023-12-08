const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")


let instructions = cleanInput[0]
let nodes = cleanInput.slice(2)

let navigate = ""
let count = 0

// instruction (ex: L)
// point (ex: ["QNB","QQJ","SFJ"])
const findNextElement = (instruction, point) => {

  let nextNode = []

  count++

  point.forEach((el) => {
    nodes.forEach((node) => {

      let element = node.slice(0, 3)
      let leftElement = node.slice(7, 10)
      let rightElement = node.slice(12, 15)

      if (el === element) {
        if (instruction === "L") {
          nextNode.push(leftElement)
        }

        if (instruction === "R") {
          nextNode.push(rightElement)
        }
      }
    })
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

let stop = true
let moveIndex = 0

while (stop) {

  if (moveIndex === 0 && count === 0) {
    navigate = findNextElement(instructions.split("")[moveIndex], findStarts())
  } else {
    navigate = findNextElement(instructions.split("")[moveIndex], navigate)
  }

  if (navigate.every((e) => {
    return e[2] === 'Z'
  })) {
    stop = false
  }

  if (instructions.split("").length === moveIndex + 1) {
    moveIndex = 0
  } else {
    moveIndex++
  }

}

console.log("Count:", count)