const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// console.log(cleanInput) 

let trees = 0
let right = 3

cleanInput.map((element, index) => {

const map = element.repeat(index+1)
    if(index > 0) {
        if(map[right] === "#") {
            trees++
        }
        right += 3
    }
})

console.log(trees)