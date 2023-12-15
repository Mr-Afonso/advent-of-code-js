const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split(",")

// console.log(cleanInput) 

let boxes = Array(256).fill([])

const anotherFunctionThatINeedToName = (string) => {

  let value = 0
  let element = ""
  let power = ""
  let canIAdd

  if (string.includes("=")) {
    element = string.split("=")[0]
    power = string.split("=")[1]
    canIAdd = true
  } else {
    element = string.split("-")[0]
    power = string.split("-")[1]
    canIAdd = false
  }

  for (let index = 0; index < element.length; index++) {
    // Determine the ASCII code for the current character of the string.
    const asciiCode = element[index].charCodeAt()
    // Increase the current value by the ASCII code you just determined.
    value += asciiCode
    // Set the current value to itself multiplied by 17.
    value = value * 17
    // Set the current value to the remainder of dividing itself by 256.
    value = (value % 256)
  }

  const boxNumber = value

  if (canIAdd) {

    // replace or add element
    if (boxes[boxNumber].some((el) => { return el.split(" ")[0] === element })) {

      let indexx = 0

      boxes[boxNumber].forEach((el, i) => {
        if (el.split(" ")[0] === element) {
          indexx = i
        }
      })

      boxes[boxNumber][indexx] = `${element} ${power}`
    } else {
      boxes[boxNumber] = [...boxes[value], `${element} ${power}`]
    }

  } else {
    // remove element
    boxes[boxNumber] = boxes[boxNumber].filter((el) => {
      return el.split(" ")[0] !== element
    })
  }

}


cleanInput.forEach((element) => {
  anotherFunctionThatINeedToName(element)
})

let focusingPower = 0

boxes.forEach((element, index) => {

  if (element.length > 0) {
    for (let i = 0; i < element.length; i++) {
      let focalLength = Number(element[i].split(" ")[1])

      focusingPower += (index + 1) * (i + 1) * (focalLength)

    }
  }

})

console.log("Focusing power", focusingPower)


