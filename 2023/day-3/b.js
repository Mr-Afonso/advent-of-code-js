// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\n")

// console.log(cleanInput)

// A gear is any * symbol that is adjacent to exactly two part numbers
// Its gear ratio is the result of multiplying those two numbers together.

let sum = 0

const findGear = (index, key) => {

  let numbers = []

  // right 
  let right = 1
  let rightNumber = ""
  while (!isNaN(cleanInput[index][key + right])) {
    rightNumber += isNaN(cleanInput[index][key + right])
    right++
  }

  if (rightNumber !== "" && !isNaN(rightNumber)) {
    numbers.push(rightNumber)
  }

  // left
  let left = 1
  let leftNumber = ""
  while (!isNaN(cleanInput[index][key - left])) {
    leftNumber += cleanInput[index][key - left]
    left++
  }

  if (leftNumber !== "" && !isNaN(leftNumber)) {
    numbers.push(leftNumber.split("").reverse().join(""))
  }

  // top
  let top = 1
  let topNumberLeft = ""
  if (!isNaN(cleanInput[index - 1][key - 1])) {
    while (!isNaN(cleanInput[index - 1][key - top])) {
      topNumberLeft += cleanInput[index - 1][key - top]
      top++
    }
    if (topNumberLeft !== "" && !isNaN(topNumberLeft)) {
      if (!isNaN(cleanInput[index - 1][key])) {
        topNumberLeft = topNumberLeft.split("").reverse().join("") + cleanInput[index - 1][key]
      }
      numbers.push(topNumberLeft)
    }

    top = 1
  }

  let topNumberRight = ""
  if (!isNaN(cleanInput[index - 1][key + 1])) {
    while (!isNaN(cleanInput[index - 1][key + top])) {
      topNumberRight += cleanInput[index - 1][key + top]
      top++
    }

    if (topNumberRight !== "" && !isNaN(topNumberRight)) {
      if (!isNaN(cleanInput[index - 1][key])) {
        topNumberRight = cleanInput[index - 1][key] + topNumberRight
      }
      numbers.push(topNumberRight)
    }

    top = 1
  }
  //down
  let down = 1
  let downNumberLeft = ""
  if (!isNaN(cleanInput[index + 1][key - 1])) {
    while (!isNaN(cleanInput[index + 1][key - down])) {
      downNumberLeft += cleanInput[index + 1][key - down]
      down++
    }
    if (downNumberLeft !== "" && !isNaN(downNumberLeft)) {
      if (!isNaN(cleanInput[index + 1][key])) {
        downNumberLeft = downNumberLeft.split("").reverse().join("") + cleanInput[index + 1][key]
        numbers.push(downNumberLeft)
      } else {
        numbers.push(downNumberLeft.split("").reverse().join(""))
      }
    }

    down = 1
  }

  let downNumberRight = ""
  if (!isNaN(cleanInput[index + 1][key + 1])) {
    while (!isNaN(cleanInput[index + 1][key + down])) {
      downNumberRight += cleanInput[index + 1][key + down]
      down++
    }

    if (downNumberRight !== "") {
      if (!isNaN(cleanInput[index + 1][key])) {
        downNumberRight = cleanInput[index + 1][key] + downNumberRight
      }
      numbers.push(downNumberRight)
    }

    down = 1
  }


  return numbers

}

cleanInput.map((element, index) => {


  element.split("").map((el, key) => {

    if (el === "*") {
      let arr = findGear(index, key)
      if (arr.length == 2) {
        console.log(arr)
        sum += (Number(arr[0]) * Number(arr[1]))
      }
    }

  })

})

console.log("Sum:", sum)