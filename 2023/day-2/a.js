const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// console.log(cleanInput)

let sum = 0

// 12 red cubes, 13 green cubes, and 14 blue cubes
// Ex: Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red

// games
cleanInput.map((element, index) => {

    let rule = []

    // set
    element.split(";").map((game) => {

        let red = 0
        let green = 0
        let blue = 0

        // color
        game.split(":").pop().split(",").map((set) => {

            // red
            if (set.includes("red")) {
                red += Number(set.replace(/\D/g, ''))
            }

            // green
            if (set.includes("green")) {
                green += Number(set.replace(/\D/g, ''))
            }

            // blue
            if (set.includes("blue")) {
                blue += Number(set.replace(/\D/g, ''))
            }
        })

        if (red <= 12 && green <= 13 && blue <= 14) {
            rule.push(true)
        } else {
            rule.push(false)
        }

    })

    if (rule.every((e) => e === true)) {
        sum += index + 1
    }

})

console.log('sum', sum)