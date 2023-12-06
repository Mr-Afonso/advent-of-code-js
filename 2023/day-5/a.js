const getInput = require('../../lib/getInput')
// const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
const cleanInput = input.split("\n")

// console.log(cleanInput)

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
  // console.log('seed', transiction)


  cleanInput.map((element, index) => {
    console.log('www', element)
    // seed-to-soil map:
    if (index > cleanInput.indexOf('seed-to-soil map:') && index < cleanInput.indexOf('soil-to-fertilizer map:') && element !== "") {
      console.log(element)
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1) {
        transiction = (transiction - source) + destination
      }
      // console.log('1', transiction)
    }

    // soil-to-fertilizer map:
    if (index > cleanInput.indexOf('soil-to-fertilizer map:') && index < cleanInput.indexOf('fertilizer-to-water map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1) {
        transiction = (transiction - source) + destination
      }
      // console.log('2', transiction)
    }

    // fertilizer-to-water map:
    if (index > cleanInput.indexOf('fertilizer-to-water map:') && index < cleanInput.indexOf('water-to-light map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])
      // console.log('transiction', transiction)
      if (transiction >= source && transiction <= source + length - 1) {
        // console.log('Before', transiction)
        transiction = (transiction - source) + destination
        // console.log(transiction)
      }
      // console.log('water', transiction)
      // console.log('element', element)
    }

    // water-to-light map:
    if (index > cleanInput.indexOf('water-to-light map:') && index < cleanInput.indexOf('light-to-temperature map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1) {
        transiction = (transiction - source) + destination
      }
    }

    // light-to-temperature map:
    if (index > cleanInput.indexOf('light-to-temperature map:') && index < cleanInput.indexOf('temperature-to-humidity map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1) {
        transiction = (transiction - source) + destination
      }
    }

    // temperature-to-humidity map:
    if (index > cleanInput.indexOf('temperature-to-humidity map:') && index < cleanInput.indexOf('humidity-to-location map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1) {
        transiction = (transiction - source) + destination
      }
    }

    // humidity-to-location map:
    if (index > cleanInput.indexOf('humidity-to-location map:') && element !== "") {
      const destination = Number(element.split(' ')[0])
      const source = Number(element.split(' ')[1])
      const length = Number(element.split(' ')[2])

      if (transiction >= source && transiction <= source + length - 1) {
        transiction = (transiction - source) + destination
      }
    }

  })


  // console.log(transiction)
  locations.push(transiction)
})


console.log('location:', locations.sort()[0])

// 1080703105 ++