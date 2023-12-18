const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")
// const cleanInput = input.split("\n")

let currentCoord = [0, 0]
let coords = []
let count = 0

cleanInput.forEach((element) => {

  let direction = element.split(" ")[2][7]
  let size = parseInt(element.split(" ")[2].slice(2, 7), 16)

  if (direction === "0") {

    for (let indexR = 0; indexR < size; indexR++) {
      currentCoord[1]++
      count++
    }
    coords.push([currentCoord[0], currentCoord[1]])
  }

  if (direction === "1") {

    for (let indexD = 0; indexD < size; indexD++) {
      currentCoord[0]++
      count++
    }
    coords.push([currentCoord[0], currentCoord[1]])
  }

  if (direction === "2") {

    for (let indexL = 0; indexL < size; indexL++) {
      currentCoord[1]--
      count++
    }
    coords.push([currentCoord[0], currentCoord[1]])
  }

  if (direction === "3") {

    for (let indexU = 0; indexU < size; indexU++) {
      currentCoord[0]--
      count++
    }
    coords.push([currentCoord[0], currentCoord[1]])
  }
})

const calculatePolygonArea = (vertices) => {

  var total = 0

  for (var i = 0, l = vertices.length; i < l; i++) {
    var addX = vertices[i][0]
    var addY = vertices[i == vertices.length - 1 ? 0 : i + 1][1]
    var subX = vertices[i == vertices.length - 1 ? 0 : i + 1][0]
    var subY = vertices[i][1]

    total += (addX * addY * 0.5)
    total -= (subX * subY * 0.5)
  }

  return Math.abs(total)
}

// the Shoelace theorem to calculate the interior area, then adding perimeter/2 + 1 to account for the 1/2-square wide 'border' around the outside that wasn't counted previously

const area = calculatePolygonArea(coords)
const perimeter = count
console.log("area", area)
console.log("perimeter", perimeter)
console.log("cubic area", area + ((perimeter / 2) + 1))