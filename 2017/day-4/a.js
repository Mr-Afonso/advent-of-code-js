const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// no duplicate words

let sum = 0

cleanInput.map((element)=> {

    uniq = [...new Set(element.split(" "))]

    if(uniq.length === element.split(" ").length) {
        sum++
    }

})

console.log("Valid", sum)