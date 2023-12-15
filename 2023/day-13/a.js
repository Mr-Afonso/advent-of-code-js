const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\r\n")

let arrayOfMatrix = []
let array = []

cleanInput.forEach((element, index) => {
 
    if (element !== "") {
        array.push(element)
    } else {
        arrayOfMatrix.push(array)
        array = []
    }

    if (index === cleanInput.length - 1) {
        arrayOfMatrix.push(array)
    }

})

let horizontal = 0
let vertical = 0

const findReflection = (input) => {

    let matrix = []

    // create matrix
    for (let index = 0; index < input.length; index++) {
        const element = input[index]
        matrix[index] = []

        for (let z = 0; z < element.length; z++) {
            const elementz = element[z]
            matrix[index][z] = elementz
        }
    }

    let count = []
    let next = true

    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index]

        // find horizontal reflection
        if (index < matrix.length - 1 && element.join("") === matrix[index + 1].join("")) {

            let countLines = false
            for (let yy = 0; yy < matrix.length; yy++) {

                if ((index - 1 - yy) >= 0 && (index + 2 + yy) < matrix.length && matrix[index - 1 - yy].join("") === matrix[index + 2 + yy].join("")) {

                    if ((index - 1 - yy) === 0 || (index + 2 + yy) === matrix.length - 1) {
                        countLines = true
                    }
                } else {
                    yy = matrix.length
                }
            }

            // console.log(countLines)
            // console.log(index)
            if (countLines) {
                console.log('horizontal', index + 1)
                horizontal += (index + 1) * 100
                next = false
            }
        }

        // find vertical reflection
        for (let z = 0; z < element.length; z++) {
            const elementz = element[z]

            if (z < element.length - 1 && elementz === element[z + 1]) {
                // console.log(z)

                let countLinex = false
                for (let yyy = 0; yyy < z; yyy++) {

                    if (((z - 1 - yyy) >= 0 && (z + 2 + yyy) < z && element[z - 1 - yyy] === element[z + 2 + yyy]) || element[yyy] === element[yyy + 1] || element[yyy - 1] === element[yyy]) {

                        //  if ((z - 1 - yyy) === 0 || (z + 2 + yyy) === element.length - 1 || (yyy+1) === element.length - 1 || (yyy) === 0) {
                        if ((z + 1) === element.length - 1 || (z - 1) === 0 || (z) === 0 || (z - 1 - yyy) === 0 || (z + 2 + yyy) === element.length - 1) {
                            countLinex = true
                            // console.log(z) 
                        }
                    } else {
                        yyy = z
                        countLinex = false
                    } 
                }
 
                if (countLinex) {
                    // console.log(z)
                    if (z === 1) {
                        count.push(0)
                    } else { 
                        count.push(z+2)
                    }

                    // countLinex = false
                }
            }


        }
    }

    // 
    const arr = count.sort((a, b) => a - b)
    console.log(count.filter(e => e == 13))
    console.log(arr)
    let countt = 1,
        max = 0,
        el;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] === arr[i - 1]) {
            countt++;
        } else {
            countt = 1;
        }
        if (countt > max) {
            max = countt;
            el = arr[i];
        }
    }

    if (next) {
        vertical += Number(el) + 1
        console.log('vertical', Number(el) + 1)
    }

}

arrayOfMatrix.forEach((element) => {
    findReflection(element)
})

console.log("@@@")
console.log("horizontal", horizontal)
console.log("vertical", vertical)
console.log("Total", horizontal + vertical)

// 52938 ++
// 52930 ++
// 3661 --
// 8301 xx
// 41356 xxx
// 28821 xxx

// 37718
// 40995