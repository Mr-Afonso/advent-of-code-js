const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

const matrix = []

// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.
// . is ground; there is no pipe in this tile.
// S is the starting position

let sCoord = []

// create an array
// find "S" coord
for (let index = 0; index < cleanInput.length; index++) {
    const element = cleanInput[index]
    matrix[index] = []

    for (let z = 0; z < element.length; z++) {
        const elementz = element[z]
        matrix[index][z] = elementz

        if (elementz === "S") {
            sCoord = [index, z]
        }
    }
}

let carryOn = true

let oldCord = [0, 0]

// next coordenate
const findNextCoord = (coord) => {

    const x = Number(coord[0])
    const z = Number(coord[1])

    const oldX = Number(oldCord[0])
    const oldZ = Number(oldCord[1])

    // up
    if (x > 0 && "|7F".includes(matrix[x - 1][z]) && `${x - 1}${z}` !== `${oldX}${oldZ}` && !"-7F".includes(matrix[x][z])) {
        oldCord = coord
        return [x - 1, z]
    }

    if (x > 0 && matrix[x - 1][z] === "S" && `${x - 1}${z}` !== `${oldX}${oldZ}`) {
        carryOn = false
    }

    // down
    if (matrix[x + 1] !== undefined && "|LJ".includes(matrix[x + 1][z]) && `${x + 1}${z}` !== `${oldX}${oldZ}` && !"-JL".includes(matrix[x][z])) {
        oldCord = coord
        return [x + 1, z]
    }

    if (matrix[x + 1] !== undefined && matrix[x + 1][z] === "S" && `${x + 1}${z}` !== `${oldX}${oldZ}`) {
        carryOn = false
    }

    // left
    if (z > 0 && "-LF".includes(matrix[x][z - 1]) && `${x}${z - 1}` !== `${oldX}${oldZ}` && !"|LF".includes(matrix[x][z])) {
        oldCord = coord
        return [x, z - 1]
    }

    if (z > 0 && matrix[x][z - 1] === "S" && `${x}${z - 1}` !== `${oldX}${oldZ}`) {
        carryOn = false
    }

    // right
    if ("-J7".includes(matrix[x][z + 1]) && `${x}${z + 1}` !== `${oldX}${oldZ}` && !"|J7".includes(matrix[x][z])) {
        oldCord = coord
        return [x, z + 1]
    }

    if (matrix[x][z + 1] === "S" && `${x}${z + 1}` !== `${oldX}${oldZ}`) {
        carryOn = false
    }

}

let count = 0

while (carryOn) {
    sCoord = findNextCoord(sCoord)
    count++
}

console.log('Count:', count / 2)

