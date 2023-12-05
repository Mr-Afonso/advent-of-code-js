const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// test input const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

// console.log(cleanInput)

let sum = 0
// winning numbers | numbers you have
// The first match makes the card worth one point and each match after the first doubles the point value of that card
// 1-2-4-8-16-32-64-128-256-512...

cleanInput.map((element) => {

  let removeCard = element.split(": ")
  let winningNumbers = removeCard[1].split(" | ")[0].split(" ")
  let myNumbers = removeCard[1].split(" | ")[1].split(" ")

  const compare = winningNumbers.filter(element => myNumbers.includes(element)).filter((element) => {
    return element !== ""
  })

  let points = 0

  compare.map((el, index) => {
    if (index === 0) {
      points = 1
    } else {
      points = points * 2
    }
  })

  sum += points

})

console.log("Total :", sum)
