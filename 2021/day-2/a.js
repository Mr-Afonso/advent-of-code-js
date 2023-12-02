const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// forward X increases the horizontal position by X units.
// down X increases the depth by X units.
// up X decreases the depth by X units.

let horizontal = 0
let depth = 0

cleanInput.map((element) => {

    if (element.includes('forward')) {
        horizontal += Number(element.replace(/\D/g, ''))
    }

    if (element.includes('down')) {
        depth += Number(element.replace(/\D/g, ''))
    }

    if (element.includes('up')) {
        depth -= Number(element.replace(/\D/g, ''))
    }

})

console.log('Sum:', horizontal * depth)