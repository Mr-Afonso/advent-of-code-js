const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

// Almanac
// seed needs to be between source range start and source range start + range length
// seed - source range start = x + destination range start

// seeds:
// seed-to-soil map:
// soil-to-fertilizer map:
// fertilizer-to-water map:
// water-to-light map:
// light-to-temperature map:
// temperature-to-humidity map:
// humidity-to-location map:

let seeds = []

let locations = []

let transiction = 0

cleanInput.map((element) => {
  // seeds
  if (element.includes('seeds:')) {
    seeds = element.replace('seeds: ', "").split(' ')
  }
})

seeds.map((seed) => {
  transiction = Number(seed)

  let soil = 0
  let fertilizer = 0
  let water = 0
  let light = 0
  let temperature = 0
  let humidity = 0
  let location = 0

  cleanInput.map((element, index) => {

    // seed-to-soil map:
    if (index > cleanInput.indexOf('seed-to-soil map:') && index < cleanInput.indexOf('soil-to-fertilizer map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && soil < 1) {
        transiction = (transiction - source) + destination
        soil++
      }
    }

    // soil-to-fertilizer map:
    if (index > cleanInput.indexOf('soil-to-fertilizer map:') && index < cleanInput.indexOf('fertilizer-to-water map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && fertilizer < 1) {
        transiction = (transiction - source) + destination
        fertilizer++
      }
    }

    // fertilizer-to-water map:
    if (index > cleanInput.indexOf('fertilizer-to-water map:') && index < cleanInput.indexOf('water-to-light map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && water < 1) {
        transiction = (transiction - source) + destination
        water++
      }
    }

    // water-to-light map:
    if (index > cleanInput.indexOf('water-to-light map:') && index < cleanInput.indexOf('light-to-temperature map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && light < 1) {
        transiction = (transiction - source) + destination
        light++
      }
    }

    // light-to-temperature map:
    if (index > cleanInput.indexOf('light-to-temperature map:') && index < cleanInput.indexOf('temperature-to-humidity map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && temperature < 1) {
        transiction = (transiction - source) + destination
        temperature++
      }
    }

    // temperature-to-humidity map:
    if (index > cleanInput.indexOf('temperature-to-humidity map:') && index < cleanInput.indexOf('humidity-to-location map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && humidity < 1) {
        transiction = (transiction - source) + destination
        humidity++
      }
    }

    // humidity-to-location map:
    if (index > cleanInput.indexOf('humidity-to-location map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1 && location < 1) {
        transiction = (transiction - source) + destination
        location++
      }
    }

  })

  locations.push(transiction)
})

console.log('location:', locations.sort((a, b) => {
  return a - b;
})[0])
