const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// test input 
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

// console.log(cleanInput)

let arr = Array(cleanInput.length).fill(1)

cleanInput.map((element, index) => {

  let removeCard = element.split(": ")
  let winningNumbers = removeCard[1].split(" | ")[0].split(" ")
  let myNumbers = removeCard[1].split(" | ")[1].split(" ")

  const compare = winningNumbers.filter(element => myNumbers.includes(element)).filter((element) => {
    return element !== ""
  })


  compare.map((el, key) => {
    arr[index + key + 1] = arr[index + key + 1] + arr[index]
  })

})
console.log("Result:", arr.reduce((a, b) => a + b))
