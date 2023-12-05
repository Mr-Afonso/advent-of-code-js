const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\n")

// A gear is any * symbol that is adjacent to exactly two part numbers
// Its gear ratio is the result of multiplying those two numbers together.

let sum = 0

const findLeftGear = (index, key) => {

  let numbers = []

  let left = 1
  let leftNumber = ""
  while (!isNaN(cleanInput[index][key - left])) {
    leftNumber += cleanInput[index][key - left]
    left++
  }

  if (leftNumber !== "") {
    numbers.push(leftNumber.split("").reverse().join(""))
  }

  return numbers

}

const findRightGear = (index, key) => {

  let numbers = []

  let right = 1
  let rightNumber = ""
  while (!isNaN(cleanInput[index][key + right])) {
    rightNumber += cleanInput[index][key + right]
    right++
  }

  if (rightNumber !== "") {
    numbers.push(rightNumber)
  }

  return numbers

}

const findTopGear = (index, key) => {

  let numbers = []

  let left = 1
  let right = 1
  let topNumber = ""
  let topLeftNumber = ""
  let topRightNumber = ""

  if (!isNaN(cleanInput[index - 1][key])) {
    topNumber = cleanInput[index - 1][key]
  }

  // left
  while (!isNaN(cleanInput[index - 1][key - left])) {
    topLeftNumber = cleanInput[index - 1][key - left] + topLeftNumber
    left++
  }

  // right
  while (!isNaN(cleanInput[index - 1][key + right])) {
    topRightNumber += cleanInput[index - 1][key + right]
    right++
  }


  if (topNumber === "" && topLeftNumber === "" && topRightNumber !== "") {
    numbers.push(topRightNumber)
  }

  if (topNumber === "" && topLeftNumber !== "" && topRightNumber === "") {
    numbers.push(topLeftNumber)
  }

  if (topNumber === "" && topLeftNumber !== "" && topRightNumber !== "") {
    numbers.push(topLeftNumber)
    numbers.push(topRightNumber)
  }

  if (topNumber !== "" && topLeftNumber === "" && topRightNumber === "") {
    numbers.push(topNumber)
  }

  if (topNumber !== "" && topLeftNumber !== "" && topRightNumber !== "") {
    numbers.push(`${topLeftNumber}${topNumber}${topRightNumber}`)
  }

  if (topNumber !== "" && topLeftNumber === "" && topRightNumber !== "") {
    numbers.push(`${topNumber}${topRightNumber}`)
  }

  if (topNumber !== "" && topLeftNumber !== "" && topRightNumber === "") {
    numbers.push(`${topLeftNumber}${topNumber}`)
  }


  return numbers

}

const findDownGear = (index, key) => {

  let numbers = []

  let left = 1
  let right = 1
  let downNumber = ""
  let downLeftNumber = ""
  let downRightNumber = ""

  if (!isNaN(cleanInput[index + 1][key])) {
    downNumber = cleanInput[index + 1][key]
  }

  // left
  while (!isNaN(cleanInput[index + 1][key - left])) {
    downLeftNumber = cleanInput[index + 1][key - left] + downLeftNumber
    left++
  }

  // right
  while (!isNaN(cleanInput[index + 1][key + right])) {
    downRightNumber += cleanInput[index + 1][key + right]
    right++
  }


  if (downNumber === "" && downLeftNumber === "" && downRightNumber !== "") {
    numbers.push(downRightNumber)
  }

  if (downNumber === "" && downLeftNumber !== "" && downRightNumber === "") {
    numbers.push(downLeftNumber)
  }

  if (downNumber === "" && downLeftNumber !== "" && downRightNumber !== "") {
    numbers.push(downLeftNumber)
    numbers.push(downRightNumber)
  }

  if (downNumber !== "" && downLeftNumber === "" && downRightNumber === "") {
    numbers.push(downNumber)
  }

  if (downNumber !== "" && downLeftNumber !== "" && downRightNumber !== "") {
    numbers.push(`${downLeftNumber}${downNumber}${downRightNumber}`)
  }

  if (downNumber !== "" && downLeftNumber === "" && downRightNumber !== "") {
    numbers.push(`${downNumber}${downRightNumber}`)
  }

  if (downNumber !== "" && downLeftNumber !== "" && downRightNumber === "") {
    numbers.push(`${downLeftNumber}${downNumber}`)
  }


  return numbers

}

cleanInput.map((element, index) => {


  element.split("").map((el, key) => {

    if (el === "*") {
      let left = findLeftGear(index, key)
      let right = findRightGear(index, key)
      let top = findTopGear(index, key)
      let down = findDownGear(index, key)

      let arr = left.concat(right, top, down)

      if (arr.length == 2) {
        sum += (Number(arr[0]) * Number(arr[1]))
      }
    }

  })

})

console.log("Sum:", sum)
