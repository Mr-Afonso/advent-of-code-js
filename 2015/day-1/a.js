const getInput = require('../../lib/getInput')
// const getInput = require('../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("")

let floor = 0

cleanInput.map((element) => {

  if (element === "(") {
    floor++
  } else {
    floor--
  }

})


console.log(floor) 