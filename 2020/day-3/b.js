const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// console.log(cleanInput) 

let trees1 = 0
let trees2 = 0
let trees3 = 0
let trees4 = 0
let trees5 = 0

let right1 = 1
let right2 = 3
let right3 = 5
let right4 = 7
let right5 = 1

// Right 1, down 1
cleanInput.map((element, index) => {
    const map = element.repeat(index + 1)
    if (index > 0) {
        if (map[right1] === "#") {
            trees1++
        }
        right1 += 1
    }
})

// Right 3, down 1
cleanInput.map((element, index) => {
    const map = element.repeat(index + 1)
    if (index > 0) {
        if (map[right2] === "#") {
            trees2++
        }
        right2 += 3
    }
})

// Right 5, down 1
cleanInput.map((element, index) => {
    const map = element.repeat(index + 1)
    if (index > 0) {
        if (map[right3] === "#") {
            trees3++
        }
        right3 += 5
    }
})

// Right 7, down 1
cleanInput.map((element, index) => {
    const map = element.repeat(index + 1)
    if (index > 0) {
        if (map[right4] === "#") {
            trees4++
        }
        right4 += 7
    }
})

// Right 1, down 2
cleanInput.map((element, index) => {
    const map = element.repeat(index + 1)
    if (index > 1) {



        if (index % 2 == 0) {
            if (map[right5] === "#") {
                trees5++
            }
            right5 += 1
        }
    }
})


console.log(trees1)
console.log(trees2)
console.log(trees3)
console.log(trees4)
console.log(trees5)
console.log('Final: ', trees1 * trees2 * trees3 * trees4 * trees5)