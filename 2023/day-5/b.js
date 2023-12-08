const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

let seeds = []

let locations = []

let transiction = 0

cleanInput.forEach((element) => {
  // seeds
  if (element.includes('seeds:')) {
    seeds = element.replace('seeds: ', "").split(' ')
  }
})

const calculateLocation = (seed, group, push = true) => {
  transiction = Number(seed)

  let soil = 0
  let fertilizer = 0
  let water = 0
  let light = 0
  let temperature = 0
  let humidity = 0
  let location = 0

  cleanInput.forEach((element, inx) => {

    // seed-to-soil map:
    if (inx > cleanInput.indexOf('seed-to-soil map:') && inx < cleanInput.indexOf('soil-to-fertilizer map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && soil < 1) {
        transiction = (transiction - source) + destination
        soil++
      }
    }

    // soil-to-fertilizer map:
    if (inx > cleanInput.indexOf('soil-to-fertilizer map:') && inx < cleanInput.indexOf('fertilizer-to-water map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && fertilizer < 1) {
        transiction = (transiction - source) + destination
        fertilizer++
      }
    }

    // fertilizer-to-water map:
    if (inx > cleanInput.indexOf('fertilizer-to-water map:') && inx < cleanInput.indexOf('water-to-light map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && water < 1) {
        transiction = (transiction - source) + destination
        water++
      }
    }

    // water-to-light map:
    if (inx > cleanInput.indexOf('water-to-light map:') && inx < cleanInput.indexOf('light-to-temperature map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && light < 1) {
        transiction = (transiction - source) + destination
        light++
      }
    }

    // light-to-temperature map:
    if (inx > cleanInput.indexOf('light-to-temperature map:') && inx < cleanInput.indexOf('temperature-to-humidity map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && temperature < 1) {
        transiction = (transiction - source) + destination
        temperature++
      }
    }

    // temperature-to-humidity map:
    if (inx > cleanInput.indexOf('temperature-to-humidity map:') && inx < cleanInput.indexOf('humidity-to-location map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && humidity < 1) {
        transiction = (transiction - source) + destination
        humidity++
      }
    }

    // humidity-to-location map:
    if (inx > cleanInput.indexOf('humidity-to-location map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && location < 1) {
        transiction = (transiction - source) + destination
        location++
      }
    }

  })

  if (push) {
    locations.push({
      seed: seed,
      group: group,
      location: transiction
    })
  }

  return transiction
}

seeds.forEach((el, index) => {

  if (index % 2 !== 0) {

    let seed = Number(seeds[index - 1])
    let lastSeed = Number(seeds[index - 1]) + Number(el) - 1
    calculateLocation(seed, index)
    calculateLocation(lastSeed, index + 1)

  }
})

// console.log('location:', locations.sort((a, b) => {
//   return a.location - b.location
// }))

// 290921248 ++
// 806051557 ++
// 281946248 1000 xxx
// 281945648 100 xxx
// 281945628 10 xxx
// 281945619 xxx
// 5368 xxx
// 6388 xxx
// 59370572 correct

// console.log([locations.sort((a, b) => {
//   return a.location - b.location
// })[0], locations.sort((a, b) => {
//   return a.location - b.location
// })[1]].sort((a, b) => {
//   return a.seed - b.seed
// }))

transiction = 0

// const lowHigh = [locations.sort((a, b) => {
//   return a.location - b.location
// })[0], locations.sort((a, b) => {
//   return a.location - b.location
// })[1]].sort((a, b) => {
//   return a.seed - b.seed
// })

let cache = 9999999999999999999999999999999999

for (let index = 1623314212 - 10000; index <= 1623314212 + 10000; index++) {
  let tran = calculateLocation(index, "||", false)

  if (tran < cache) {
    console.log('seed', index)
    console.log(tran)
    cache = tran
  }
}


console.log('location:', locations.sort((a, b) => {
  return a.location - b.location
}))