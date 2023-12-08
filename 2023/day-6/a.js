const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

let time
let distances

cleanInput.forEach((element, index) => {

    if (index === 0) {
        time = element.split(" ").filter((e) => {
            return !isNaN(e) && e !== ""
        })
    }

    if (index === 1) {
        distances = element.split(" ").filter((e) => {
            return !isNaN(e) && e !== ""
        })
    }

})

let numberWaysToWin = []

time.forEach((element, index) => {

    let raceTime = Number(element)
    let record = Number(distances[index])

    let speed
    let timeLeft
    let traveled

    let count = 0

    for (let hold = 0; hold <= raceTime; hold++) {

        speed = hold
        timeLeft = raceTime - hold
        traveled = timeLeft * speed

        if (traveled > record) {
            count++
        }
    }

    numberWaysToWin.push(count)
})

console.log("Value: ", numberWaysToWin.reduce((a, b) => {
    return a * b
}))