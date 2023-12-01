const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

let count = 0

cleanInput.map((element) => {

const rep = element.split(" ")[0].split("-")
const letter = element.split(" ")[1].replace(':',"")
const password = element.split(" ")[2]

if((password[Number(rep[0])-1] === letter && password[Number(rep[1])-1] !== letter) || 
(password[Number(rep[0])-1] !== letter && password[Number(rep[1])-1] === letter)) {
    count++
}
})
 
console.log(count) 