// console.time()

const getInput = require('../../lib/getInput')
// const getInput = require('../lib/getTestInput')
let input = getInput(__dirname)

const cleanInput = input.split("\n")

let acumulate = 0
let rosettaStone = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]

const compare = (a, b) => {
  if (a.index < b.index) {
    return -1
  }
  if (a.index > b.index) {
    return 1
  }
  return 0
}


const getDigits = (string) => {

  let values = []

  rosettaStone.map((element, index) => {

    if (string.search(element) > -1) {

      if (string.search(element) !== string.lastIndexOf(element)) {

        values.push({
          values: element.length > 1 ? index + 1 : Number(element),
          index: string.search(element)
        })

        values.push({
          values: element.length > 1 ? index + 1 : Number(element),
          index: string.lastIndexOf(element)
        })

      } else {
        values.push({
          values: element.length > 1 ? index + 1 : Number(element),
          index: string.search(element)
        })
      }

    }

  })

  if (values.length === 1) {
    return Number(`${values.sort(compare)[0].values}${values.sort(compare)[0].values}`)
  } else {
    return Number(`${values.sort(compare)[0].values}${values.sort(compare)[values.length - 1].values}`)
  }
}


cleanInput.map((element) => {
  acumulate += getDigits(element)
})

console.log("acumulate", acumulate)

// console.timeEnd()  