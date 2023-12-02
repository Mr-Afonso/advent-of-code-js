const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// no duplicate words

let sum = 0

cleanInput.map((element) => {

    let arr = []

    element.split(" ").map((string) => {
        arr.push(string.split('').sort().join(''))
    })

    let uniq = [...new Set(arr)]

    if (uniq.length === element.split(" ").length) {
        sum++
    }

})

console.log("Valid", sum)