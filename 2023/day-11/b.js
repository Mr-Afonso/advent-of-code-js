const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")
// const cleanInput = input.split("\n")

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

let beforeExp = []
for (let index = 0; index < matrix.length; index++) {
  const element = matrix[index]

  for (let z = 0; z < element.length; z++) {
    const elementz = element[z]

    if (elementz !== ".") {
      beforeExp.push({
        n: elementz,
        co: [index, z]
      })
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
  const element2 = beforeExp[index]

  for (let z = index + 1; z < gal.length; z++) {
    const elementz = gal[z]
    const elementz2 = beforeExp[z]
    if (element.n !== elementz.n) {

      const factor = 999999

      // x2
      elementz.co[0]
      element.co[0]
      let x2 = (elementz.co[0] - elementz2.co[0]) * factor

      // x1
      elementz2.co[0]
      element2.co[0]
      let x1 = (element.co[0] - element2.co[0]) * factor

      // y2
      elementz.co[1]
      element.co[1]
      let y2 = (elementz.co[1] - elementz2.co[1]) * factor

      // y1
      elementz2.co[1]
      element2.co[1]
      let y1 = (element.co[1] - element2.co[1]) * factor

      // shortest paths between galaxies (dist = abs(x2 - x1) + abs(y2 - y1);)
      results += Math.abs((elementz2.co[0] + x2) - (element2.co[0] + x1)) + Math.abs((elementz2.co[1] + y2) - (element2.co[1] + y1))
    }
  }
}

console.log(results)
