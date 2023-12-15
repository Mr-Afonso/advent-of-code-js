const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split(",")

// console.log(cleanInput) 

const anotherFunctionThatINeedToName = (string) => {

  let value = 0

  for (let index = 0; index < string.length; index++) {
    // Determine the ASCII code for the current character of the string.
    const asciiCode = string[index].charCodeAt()
    // Increase the current value by the ASCII code you just determined.
    value += asciiCode
    // Set the current value to itself multiplied by 17.
    value = value * 17
    // Set the current value to the remainder of dividing itself by 256.
    value = (value % 256)

  }

  return value

}

let value = []

cleanInput.forEach((element) => {
  value.push(anotherFunctionThatINeedToName(element))
})

console.log("Value:", value.reduce((a, b) => { return a + b }))