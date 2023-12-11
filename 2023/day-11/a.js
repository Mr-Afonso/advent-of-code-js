// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\r\n")
const cleanInput = input.split("\n")

// create matrix
// from galaxies to numbers
let matrix = []
let galaxyNumber = 1

for (let index = 0; index < cleanInput.length; index++) {
  const element = cleanInput[index]
  matrix[index] = []

  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]
    matrix[index][z] = elementz

    if (elementz === "#") {
      matrix[index][z] = galaxyNumber
      galaxyNumber++
    } else {
      matrix[index][z] = elementz
    }
  }
}

// expand
let expandedMatrix = []

let zCoordenatesToNotExpand = []

// expand x axis
matrix.forEach((element) => {

  expandedMatrix.push(element)

  if (element.every((el) => {
    return el === "."
  })) {
    expandedMatrix.push(element)
  }

  element.forEach((el, index) => {
    if (el !== ".") {
      zCoordenatesToNotExpand.push(index)
    }
  })

})

let cleanzCoordenatesToNotExpand = zCoordenatesToNotExpand.filter((value, index, array) => { return array.indexOf(value) === index }).sort((a, b) => { return a - b })

let expandedAllMatrix = []

let zCoordenatesToExpand = []

matrix.forEach((e, index) => {

  if (!cleanzCoordenatesToNotExpand.includes(index)) {
    zCoordenatesToExpand.push(index)
  }

})

// expand y axis 
expandedMatrix.forEach((element, index) => {

  let row = []

  element.forEach((el, indexx) => {

    if (zCoordenatesToExpand.includes(indexx)) {
      row.push('.')
    }
    row.push(el)
  })

  expandedAllMatrix.push(row)

})

let gal = []
// galaxies
for (let index = 0; index < expandedAllMatrix.length; index++) {
  const element = expandedAllMatrix[index]

  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]

    if (elementz !== ".") {
      gal.push({
        n: elementz,
        co: [index, z]
      })
    }

  }
}

let results = 0

// pairs of galaxies
for (let index = 0; index < gal.length - 1; index++) {
  const element = gal[index]

  for (let z = index + 1; z < gal.length; z++) {
    const elementz = gal[z]
    if (element.n !== elementz.n) {

      // shortest paths between galaxies (dist = abs(x2 - x1) + abs(y2 - y1);)
      results += Math.abs(elementz.co[0] - element.co[0]) + Math.abs(elementz.co[1] - element.co[1])
    }
  }
}

console.log(results)
