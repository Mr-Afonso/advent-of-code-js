const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

// five cards labeled one of A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2
// 13 cards total

let arrByType = []

cleanInput.forEach((element, index) => {

    const hand = element.split(" ")[0].split("")
    const bid = Number(element.split(" ")[1])

    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

    const allDuplicates = findDuplicates(hand)
    const uniqueDuplicates = [...new Set(findDuplicates(hand))]

    // High card, where all cards' labels are distinct
    if (allDuplicates.length === 0) {
        arrByType.push({
            strength: 1,
            hand: hand.join(""),
            bid: bid
        })
    }

    // One pair
    if (allDuplicates.length === 1) {
        arrByType.push({
            strength: 2,
            hand: hand.join(""),
            bid: bid
        })
    }

    // Two pair
    if (allDuplicates.length > 1 && allDuplicates.length === uniqueDuplicates.length) {
        arrByType.push({
            strength: 3,
            hand: hand.join(""),
            bid: bid
        })
    }

    // Three of a kind
    if (allDuplicates.length === 2 && uniqueDuplicates.length === 1) {
        arrByType.push({
            strength: 4,
            hand: hand.join(""),
            bid: bid
        })
    }

    // Full house
    if (allDuplicates.length === 3 && uniqueDuplicates.length === 2) {
        arrByType.push({
            strength: 5,
            hand: hand.join(""),
            bid: bid
        })
    }

    // Four of a kind
    if (allDuplicates.length === 3 && uniqueDuplicates.length === 1) {
        arrByType.push({
            strength: 6,
            hand: hand.join(""),
            bid: bid
        })
    }

    // Five of a kind
    if (allDuplicates.length === 4 && uniqueDuplicates.length === 1) {
        arrByType.push({
            strength: 7,
            hand: hand.join(""),
            bid: bid
        })
    }

})

const convertToNumber = (letter) => {

    if (letter === "A") {
        return 13
    }

    if (letter === "K") {
        return 12
    }

    if (letter === "Q") {
        return 11
    }

    if (letter === "J") {
        return 10
    }

    if (letter === "T") {
        return 9
    }

}

const findStronger = (a, b) => {

    for (let index = 0; index < 5; index++) {

        if (a[index] !== b[index]) {

            // if both number
            if (!isNaN(a[index]) && !isNaN(b[index])) {
                if (Number(a[index]) > Number(b[index])) {
                    return 1
                } 
                if (Number(a[index]) < Number(b[index])) {
                    return -1
                } 

            }

            // if a is number
            if (!isNaN(a[index]) && isNaN(b[index])) {
                return -1
            }

            // if b number
            if (isNaN(a[index]) && !isNaN(b[index])) {
                return 1
            }

            // if non number
            if (isNaN(a[index]) && isNaN(b[index])) {

                if (convertToNumber(a[index]) > convertToNumber(b[index])) {
                    return 1
                } 
                
                if (convertToNumber(a[index]) < convertToNumber(b[index])) {
                    return -1
                } 

            }
        }

    }
}

const handSorderOfStrength = arrByType.sort((a, b) => {
    if (a.strength === b.strength) {
        findStronger(a.hand, b.hand)

        // a = 1
        // b = -1
        return findStronger(a.hand, b.hand)
    } else {
        return a.strength - b.strength
    }
})

let count = 0 

handSorderOfStrength.forEach((element, index) => {

    count += element.bid * (index+1)
})

console.log('Total', count)
