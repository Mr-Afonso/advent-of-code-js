const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

let acc = 0

cleanInput.map((element) => {

  // console.log(element.split("x"))

  // 2*l*w + 2*w*h + 2*h*l
  // l w h 

  const l = Number(element.split("x")[0])
  const w = Number(element.split("x")[1])
  const h = Number(element.split("x")[2])

  let side1 = l
  let side2 = w
  let side3 = h

  let sides = [side1, side2, side3].sort((a, b) => {
    return a - b;
  })


  let wrap = sides[0] + sides[0] + sides[1] + sides[1]
  let bow = l * w * h

  acc += wrap + bow

})

console.log(acc) 