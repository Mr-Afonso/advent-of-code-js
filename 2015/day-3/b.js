const getInput = require('../../lib/getInput')
// const getInput = require('../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("")

// console.log(cleanInput)

let houses = []
let now = [0, 0]

let housesRoboSanta = []
let nowRoboSanta = [0, 0]

cleanInput.map((element, index) => {

  if (element === "v") {
    now = [now[0] + 1, now[1]]

    houses.push(now.toString())
  }

  if (element === ">") {
    now = [now[0], now[1] + 1]

    houses.push(now.toString())
  }

  if (element === "<") {
    now = [now[0], now[1] - 1]

    houses.push(now.toString())
  }

  if (element === "^") {
    now = [now[0] - 1, now[1]]

    houses.push(now.toString())
  }

})

console.log("all houses", houses.length)
console.log("houses with at least one present", houses.filter(function (item, pos) {
  return houses.indexOf(item) == pos;
}).length)