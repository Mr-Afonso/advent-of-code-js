// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\r\n")
const cleanInput = input.split("\n")

// console.log(cleanInput) 

// operational (.)
// damaged (#)
// unknown (?)

const calculateAllArrangements = (springLength, springsNumber) => {


  console.log(springLength)
  console.log(springsNumber)

  let array = []
  let string = []

  for (let z = 0; z < springsNumber.length; z++) {

    for (let index = 0; index < springLength; index++) {

      for (let zz = 0; zz < Number(springsNumber[z]); zz++) {
        string[index] = "#"
        index++
      }

      for (let y = index; y < springLength; y++) {
        string[index + y] = "."
      }

      array.push(string.join(""))
      string = []
    }
  }


  return array

}

cleanInput.forEach((element) => {

  // springs
  let springs = element.split(" ")[0]

  // number of damaged springs  
  let springsNumber = element.split(" ")[1]

  let allArrangements = calculateAllArrangements(springs.length, springsNumber.split(","))

  // console.log(springs)
  // console.log(springsNumber)

  console.log(allArrangements)

})

// 4

