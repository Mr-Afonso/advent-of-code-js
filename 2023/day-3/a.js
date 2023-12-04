const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\n")

// console.log(cleanInput)

let numbers = []
let numbers2 = []

// any number adjacent to a symbol, even diagonally, is a "part number"

cleanInput.map((element, index) => {

  let number = ""
  let number2 = ""

  element.split("").map((el, key) => {

    let tot = 0

    if (!isNaN(el)) {
      // number += el
      number2 += el

      // center
      if ((index > 0 && index < cleanInput.length - 1) && (key > 0 && key < element.length - 1)) {
        // top - +1
        if (cleanInput[index - 1][key + 1] === "." || !isNaN(cleanInput[index - 1][key + 1])) {
          tot++
        }
        // top - 0
        if (cleanInput[index - 1][key] === "." || !isNaN(cleanInput[index - 1][key])) {
          tot++
        }
        // top - -1
        if (cleanInput[index - 1][key - 1] === "." || !isNaN(cleanInput[index - 1][key - 1])) {
          tot++
        }
        // middle - +1
        if (cleanInput[index][key + 1] === "." || !isNaN(cleanInput[index][key + 1])) {
          tot++
        }
        // middle - -1
        if (cleanInput[index][key - 1] === "." || !isNaN(cleanInput[index][key - 1])) {
          tot++
        }
        // bottom - +1
        if (cleanInput[index + 1][key + 1] === "." || !isNaN(cleanInput[index + 1][key + 1])) {
          tot++
        }
        // bottom - 0
        if (cleanInput[index + 1][key] === "." || !isNaN(cleanInput[index + 1][key])) {
          tot++
        }
        // bottom - -1
        if (cleanInput[index + 1][key - 1] === "." || !isNaN(cleanInput[index + 1][key - 1])) {
          tot++
        }
      }

      // top center
      if ((index === 0 && (key > 0 && key < element.length))) {
        // middle - +1
        if (cleanInput[index][key + 1] === "." || !isNaN(cleanInput[index][key + 1])) {
          tot++
        }
        // middle - -1
        if (cleanInput[index][key - 1] === "." || !isNaN(cleanInput[index][key - 1])) {
          tot++
        }
        // bottom - +1
        if (cleanInput[index + 1][key + 1] === "." || !isNaN(cleanInput[index + 1][key + 1])) {
          tot++
        }
        // bottom - 0
        if (cleanInput[index + 1][key] === "." || !isNaN(cleanInput[index + 1][key])) {
          tot++
        }
        // bottom - -1
        if (cleanInput[index + 1][key - 1] === "." || !isNaN(cleanInput[index + 1][key - 1])) {
          tot++
        }
      }

      // bottom center
      if ((index === cleanInput.length - 1 && (key > 0 && key < element.length))) {
        // top - +1
        if (cleanInput[index - 1][key + 1] === "." || !isNaN(cleanInput[index - 1][key + 1])) {
          tot++
        }
        // top - 0
        if (cleanInput[index - 1][key] === "." || !isNaN(cleanInput[index - 1][key])) {
          tot++
        }
        // top - -1
        if (cleanInput[index - 1][key - 1] === "." || !isNaN(cleanInput[index - 1][key - 1])) {
          tot++
        }
        // middle - +1
        if (cleanInput[index][key + 1] === "." || !isNaN(cleanInput[index][key + 1])) {
          tot++
        }
        // middle - -1
        if (cleanInput[index][key - 1] === "." || !isNaN(cleanInput[index][key - 1])) {
          tot++
        }
      }

      // top left
      if ((index === 0 && key === 0)) {
        // middle - +1
        if (cleanInput[index][key + 1] === "." || !isNaN(cleanInput[index][key + 1])) {
          tot++
        }
        // bottom - +1
        if (cleanInput[index + 1][key + 1] === "." || !isNaN(cleanInput[index + 1][key + 1])) {
          tot++
        }
        // bottom - 0
        if (cleanInput[index + 1][key] === "." || !isNaN(cleanInput[index + 1][key])) {
          tot++
        }
      }

      // top right
      if ((index === 0 && key === element.length - 1)) {
        // middle - -1
        if (cleanInput[index][key - 1] === "." || !isNaN(cleanInput[index][key - 1])) {
          tot++
        }
        // bottom - 0
        if (cleanInput[index + 1][key] === "." || !isNaN(cleanInput[index + 1][key])) {
          tot++
        }
        // bottom - -1
        if (cleanInput[index + 1][key - 1] === "." || !isNaN(cleanInput[index + 1][key - 1])) {
          tot++
        }
      }

      // bottom left
      if ((index === cleanInput.length - 1 && key === 0)) {
        // top - +1
        if (cleanInput[index - 1][key + 1] === "." || !isNaN(cleanInput[index - 1][key + 1])) {
          tot++
        }
        // top - 0
        if (cleanInput[index - 1][key] === "." || !isNaN(cleanInput[index - 1][key])) {
          tot++
        }
        // middle - +1
        if (cleanInput[index][key + 1] === "." || !isNaN(cleanInput[index][key + 1])) {
          tot++
        }
      }

      // bottom right
      if ((index === cleanInput.length - 1 && key === element.length - 1)) {
        // top - 0
        if (cleanInput[index - 1][key] === "." || !isNaN(cleanInput[index - 1][key])) {
          tot++
        }
        // top - -1
        if (cleanInput[index - 1][key - 1] === "." || !isNaN(cleanInput[index - 1][key - 1])) {
          tot++
        }
        // middle - -1
        if (cleanInput[index][key - 1] === "." || !isNaN(cleanInput[index][key - 1])) {
          tot++
        }
      }

      // left center
      if ((index > 0 && index < cleanInput.length) && (key === 0)) {
        // top - +1
        if (cleanInput[index - 1][key + 1] === "." || !isNaN(cleanInput[index - 1][key + 1])) {
          tot++
        }
        // top - 0
        if (cleanInput[index - 1][key] === "." || !isNaN(cleanInput[index - 1][key])) {
          tot++
        }
        // middle - +1
        if (cleanInput[index][key + 1] === "." || !isNaN(cleanInput[index][key + 1])) {
          tot++
        }
        // bottom - +1
        if (cleanInput[index + 1][key + 1] === "." || !isNaN(cleanInput[index + 1][key + 1])) {
          tot++
        }
        // bottom - 0
        if (cleanInput[index + 1][key] === "." || !isNaN(cleanInput[index + 1][key])) {
          tot++
        }
      }

      // right center
      if ((index > 0 && index < cleanInput.length) && (key === element.length - 1)) {
        // top - 0
        if (cleanInput[index - 1][key] === "." || !isNaN(cleanInput[index - 1][key])) {
          tot++
        }
        // top - -1
        if (cleanInput[index - 1][key - 1] === "." || !isNaN(cleanInput[index - 1][key - 1])) {
          tot++
        }
        // middle - -1
        if (cleanInput[index][key - 1] === "." || !isNaN(cleanInput[index][key - 1])) {
          tot++
        }
        // bottom - 0
        if (cleanInput[index + 1][key] === "." || !isNaN(cleanInput[index + 1][key])) {
          tot++
        }
        // bottom - -1
        if (cleanInput[index + 1][key - 1] === "." || !isNaN(cleanInput[index + 1][key - 1])) {
          tot++
        }
      }

      if (
        ((index > 0 && index < cleanInput.length - 1) && (key > 0 && key < element.length - 1) && tot === 8) ||
        ((index === 0 && (key > 0 && key < element.length)) && tot === 5) ||
        ((index === cleanInput.length - 1 && (key > 0 && key < element.length)) && tot === 5) ||
        ((index === 0 && key === 0) && tot === 3) ||
        ((index === 0 && key === element.length - 1) && tot === 3) ||
        ((index === cleanInput.length - 1 && key === 0) && tot === 3) ||
        ((index === cleanInput.length - 1 && key === element.length - 1) && tot === 3) ||
        ((index > 0 && index < cleanInput.length) && (key === 0) && tot === 5) ||
        (((index > 0 && index < cleanInput.length) && (key === element.length - 1)) && tot === 5)
      ) {
        number += el
      }

      if (element.length - 1 === key) {
        if (number !== "" && number === number2) {
          numbers.push(Number(number))
        } else {
          if (number2 !== "") {
            numbers2.push(Number(number2))
          }
        }

        number = ""
        number2 = ""
      }

    } else {
      if (number !== "" && number === number2) {
        numbers.push(Number(number))
      } else {
        if (number2 !== "") {
          numbers2.push(Number(number2))
        }
      }

      number = ""
      number2 = ""

    }

  })

})



console.log("not adjacent to a symbol", numbers)
console.log("adjacent to a symbol", numbers2)

const initialValue = 0;
console.log('sum of all of the part numbers: ', numbers2.reduce((accumulator, currentValue) => accumulator + currentValue,
  initialValue))