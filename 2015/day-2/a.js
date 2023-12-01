const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

let acc = 0

cleanInput.map((element) => {

  console.log(element.split("x"))

  // 2*l*w + 2*w*h + 2*h*l
  // l w h

  const l = Number(element.split("x")[0])
  const w = Number(element.split("x")[1])
  const h = Number(element.split("x")[2])

  let total = ((2 * l * w) + (2 * w * h) + (2 * h * l))

  let side1 = l * w
  let side2 = w * h
  let side3 = h * l

  let extra = [side1, side2, side3].sort((a, b) => {
    return a - b;
  })[0]

  acc += total + extra

})

console.log(acc) 