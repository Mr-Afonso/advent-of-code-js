const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// (0) 3  0  1  -3 
// (1) 3  0  1  -3
// 2 (3) 0  1  -3
// 2  4  0  1 (-3)
// 2 (4) 0  1  -2
// 2  5  0  1  -2

let isInside = true
let index = 0
let jump = 0
let count = 0

while (isInside) {

    if (cleanInput[index] === undefined) {
        isInside = false
    } else {

        // read
        jump = Number(cleanInput[index])

        // update old reading
        cleanInput[index] = Number(cleanInput[index]) + 1

        // action - jump
        index = index + jump

        count++

    }

}

console.log('Total:', count)