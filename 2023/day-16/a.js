// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// console.log(cleanInput) 

let matrix = []
let energizedMatrix = []

for (let index = 0; index < cleanInput.length; index++) {
    const element = cleanInput[index]
    matrix[index] = []
    energizedMatrix[index] = []

    for (let z = 0; z < element.length; z++) {
        const elementz = element[z]
        matrix[index][z] = elementz
        energizedMatrix[index][z] = "."
    }
}

const matrixLength = matrix.length * matrix[0].length
let count = 0

const moveLightBeam = (x, y, direction) => {

    // lets stop this madness
    if (x < 0 || x > matrix.length - 1 || y < 0 || y > matrix[0].length - 1 || count > matrixLength) {
        return;
    }

    energizedMatrix[x][y] = count
    count++

    if (direction === "right") {

        if (matrix[x][y] === ".") {
            moveLightBeam(x, y + 1, "right");
        }

        if (matrix[x][y] === "-") {
            moveLightBeam(x, y + 1, "right");
        }

        if (matrix[x][y] === "|") {
            moveLightBeam(x + 1, y, "down")
            moveLightBeam(x - 1, y, "up")
        }

        if (matrix[x][y] === "/") {
            moveLightBeam(x - 1, y, "up");
        }

        if (matrix[x][y] !== "-" && matrix[x][y] !== "|" && matrix[x][y] !== "/" && matrix[x][y] !== ".") {
            moveLightBeam(x + 1, y, "down");
        }

    }

    if (direction === "left") {
        if (matrix[x][y] === ".") {
            // console.log(x,y)
            moveLightBeam(x, y - 1, "left");
        }

        if (matrix[x][y] === "-") {
            moveLightBeam(x, y - 1, "left");
        }

        if (matrix[x][y] === "|") {
            moveLightBeam(x - 1, y, "up")
            moveLightBeam(x + 1, y, "down")
        }

        if (matrix[x][y] === "/") {
            moveLightBeam(x + 1, y, "down");
        }

        if (matrix[x][y] !== "-" && matrix[x][y] !== "|" && matrix[x][y] !== "/" && matrix[x][y] !== ".") {
            moveLightBeam(x - 1, y, "up");
        }

    }

    if (direction === "up") {

        if (matrix[x][y] === ".") {
            moveLightBeam(x - 1, y, "up");
        }

        if (matrix[x][y] === "-") {
            moveLightBeam(x, y - 1, "left")
            moveLightBeam(x, y + 1, "right")
        }

        if (matrix[x][y] === "|") {
            moveLightBeam(x - 1, y, "up");
        }

        if (matrix[x][y] === "/") {
            moveLightBeam(x, y + 1, "right");
        }

        if (matrix[x][y] !== "-" && matrix[x][y] !== "|" && matrix[x][y] !== "/" && matrix[x][y] !== ".") {
            moveLightBeam(x, y - 1, "left");
        }

    }

    if (direction === "down") {

        if (matrix[x][y] === ".") {
            moveLightBeam(x + 1, y, "down");
        }

        if (matrix[x][y] === "-") {
            moveLightBeam(x, y + 1, "right")
            moveLightBeam(x, y - 1, "left")
        }

        if (matrix[x][y] === "|") {
            moveLightBeam(x + 1, y, "down");
        }

        if (matrix[x][y] === "/") {
            moveLightBeam(x, y - 1, "left");
        }

        if (matrix[x][y] !== "-" && matrix[x][y] !== "|" && matrix[x][y] !== "/" && matrix[x][y] !== ".") {
            moveLightBeam(x, y + 1, "right");
        }

    }

}



moveLightBeam(0, 0, "right")

console.table(energizedMatrix)

let total = 0

for (let index = 0; index < energizedMatrix.length; index++) {
    const element = energizedMatrix[index]

    for (let z = 0; z < element.length; z++) {
        const elementz = element[z]

        if (elementz !== ".") {
            total++
        }
    }
}

console.log("Total:", total)