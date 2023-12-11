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

transiction = 0

let cache = 99999999999999999999

let bestSeed = 0

// check each seed lot for the best seed group (+/- 10000)
seeds.forEach((el, index) => {

  if (index % 2 == 0) {

    for (let z = Number(seeds[index]); z <= Number(seeds[index]) + Number(seeds[index + 1]) - 1; z += 10000) {
      let tran = calculateLocation(z, "||", false)

      if (tran < cache) {
        bestSeed = z
        cache = tran
      }
    }
  }
})

for (let index = bestSeed - 10000; index <= bestSeed + 10000; index++) {
  let tran = calculateLocation(index, "||", false)

  if (tran < cache) {
    cache = tran
  }
}

console.log("Total:", cache)
