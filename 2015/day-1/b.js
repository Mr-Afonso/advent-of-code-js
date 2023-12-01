const getInput = require('../../lib/getInput')
// const getInput = require('../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("")

let floor = 0

cleanInput.forEach((element, index) => {

  if (element === "(") {
    floor++
  } else {
    floor--
  }

  if (floor === -1) {
    console.log(index + 1)
    throw new Error("Break the loop.")
  }

})

// console.log(floor) 