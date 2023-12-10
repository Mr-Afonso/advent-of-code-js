const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
let cleanInput = input.split("\r\n")

let matrix = []
let sCoord = []

// create a matrix
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

let loop = []
loop.push(sCoord)

const firstX = sCoord[0]
const firstZ = sCoord[1]

// next coordenate
const findNextCoord = (coord) => {

    if (coord !== undefined) {
        const x = Number(coord[0])
        const z = Number(coord[1])

        const oldX = Number(oldCord[0])
        const oldZ = Number(oldCord[1])

        // up
        if (x > 0 && "|7F".includes(matrix[x - 1][z]) && `${x - 1}${z}` !== `${oldX}${oldZ}` && !"-7F".includes(matrix[x][z])) {
            oldCord = coord
            return [x - 1, z]
        }

        if (x > 0 && matrix[x - 1][z] === "S" && `${x - 1}${z}` !== `${oldX}${oldZ}` && firstX !== x - 1 && firstZ !== z) {
            carryOn = false
        }

        // down
        if (matrix[x + 1] !== undefined && "|LJ".includes(matrix[x + 1][z]) && `${x + 1}${z}` !== `${oldX}${oldZ}` && !"-JL".includes(matrix[x][z])) {
            oldCord = coord
            return [x + 1, z]
        }

        if (matrix[x + 1] !== undefined && matrix[x + 1][z] === "S" && `${x + 1}${z}` !== `${oldX}${oldZ}` && firstX !== x + 1 && firstZ !== z) {
            carryOn = false
        }

        // left
        if (z > 0 && "-LF".includes(matrix[x][z - 1]) && `${x}${z - 1}` !== `${oldX}${oldZ}` && !"|LF".includes(matrix[x][z])) {
            oldCord = coord
            return [x, z - 1]
        }

        if (z > 0 && matrix[x][z - 1] === "S" && `${x}${z - 1}` !== `${oldX}${oldZ}` && firstX !== x && firstZ !== z - 1) {
            console.log(coord)
            carryOn = false
        }

        // right
        if ("-J7".includes(matrix[x][z + 1]) && `${x}${z + 1}` !== `${oldX}${oldZ}` && !"|J7".includes(matrix[x][z])) {
            oldCord = coord
            return [x, z + 1]
        }

        if (matrix[x][z + 1] === "S" && `${x}${z + 1}` !== `${oldX}${oldZ}` && firstX !== x && firstZ !== z + 1) {
            carryOn = false
        }
    } else {
        carryOn = false
    }

}

while (carryOn) {
    sCoord = findNextCoord(sCoord)
    if(sCoord !== undefined) {
        loop.push(sCoord)
    }
}

// count to the left "|", "L", "J"
const countToTheLeft = (index, z) => {

    let left = z
    let countt = 0

    while (left >= 0) {

        if ("|".includes(matrix[index][left - 1])) {
            countt++
        }

        if ("J".includes(matrix[index][left - 1])) {
            countt++
        }

        if ("L".includes(matrix[index][left - 1])) {
            countt++
        }

        left--
    }

    return countt

}

let totalInside = 0

for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index]

    for (let z = 0; z < element.length; z++) {
        const elementz = element[z]

        if (loop.filter((el) => {
            return el[0] === index && el[1] === z
        }).length === 0) {
            matrix[index][z] = "."
        }

        if (elementz === "S") {
           //  matrix[index][z] = "7" => testInput
           matrix[index][z] = "|" // ups manual work
        }
    }
}


for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index]

    for (let z = 0; z < element.length; z++) {
        const elementz = element[z]

        if (elementz === ".") {
            const value = countToTheLeft(index, z)
            if (value % 2 !== 0) {
                totalInside++
            }
        }
    }
}

console.log("Total inside", totalInside)
