// console.time()

const getInput = require('../lib/getInput')
// const getInput = require('../lib/getTestInput')
let input = getInput(__dirname)

const cleanInput = input.split("\n")

let accumulate = 0

cleanInput.map((element) => {
  const test = element.replace(/\D/g, '')

  if (test.length > 1) {
    accumulate += Number(`${test[0]}${test[test.length - 1]}`)

  } else {
    accumulate += Number(`${test}${test}`)

  }
})

console.log("accumulate", accumulate)

// console.timeEnd()  