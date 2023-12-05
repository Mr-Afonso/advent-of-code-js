// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// test input 
const cleanInput = input.split("\n")
// const cleanInput = input.split("\r\n")

// console.log(cleanInput)

let arr = Array(cleanInput.length).fill(0)

cleanInput.map((element, index) => {

  let removeCard = element.split(": ")
  let winningNumbers = removeCard[1].split(" | ")[0].split(" ")
  let myNumbers = removeCard[1].split(" | ")[1].split(" ")

  const compare = winningNumbers.filter(element => myNumbers.includes(element)).filter((element) => {
    return element !== ""
  })

  // let points = 0
  console.log(compare.length)
  compare.map((el, key) => {
    if (index === 0) {
      arr[index + key + 1] = 1 + arr[index + key + 1]
    } else {
      arr[index + key + 1] = arr[index + key + 1] * compare.length
    }
  })

  console.log(arr)



})


// 30 scratchcards

// 1+2+4+8+14+1