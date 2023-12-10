const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

let total = 0

const predictNextStep = (steps) => {

    let arrs = []
    let arr = []

    arrs.push(steps)

    let lastIndex = 0

    const allEqualZero = arr => arr.every(val => val === 0)

    let zIndex = 0

    for (let index = 0; index < arrs[zIndex].length; index++) {

        if (index < arrs[zIndex].length - 1) {
            arr.push(Number(arrs[zIndex][index + 1]) - Number(arrs[zIndex][index]))
        } else {
            if (allEqualZero(arr)) {
            } else {
                index = -1
                zIndex++
                arrs.push(arr)
                arr = []
            }
        }
    }

    arrs.forEach((element) => {
        lastIndex += Number(element[element.length - 1])
    })

    return lastIndex

}

cleanInput.forEach((element) => {

    total += predictNextStep(element.split(" ").filter(e => e !== ""))

})

console.log("Total", total)