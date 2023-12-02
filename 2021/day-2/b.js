const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// down X increases your aim by X units.
// up X decreases your aim by X units.
// forward X does two things:
//      It increases your horizontal position by X units.
//      It increases your depth by your aim multiplied by X.

let horizontal = 0
let depth = 0
let aim = 0

cleanInput.map((element) => {

    if (element.includes('forward')) {
        horizontal += Number(element.replace(/\D/g, ''))
        depth += aim * Number(element.replace(/\D/g, ''))
    }

    if (element.includes('down')) {
        aim += Number(element.replace(/\D/g, ''))
    }

    if (element.includes('up')) {
        aim -= Number(element.replace(/\D/g, ''))
    }

})

console.log('Sum:', horizontal * depth)