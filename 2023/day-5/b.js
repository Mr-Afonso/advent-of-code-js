// const getInput = require('../../lib/getInput')
const getInput = require('../../lib/getTestInput')

let input = getInput(__dirname)
// const cleanInput = input.split("\n")
const cleanInput = input.split("\r\n")

// Almanac

// seeds:
// seed-to-soil map:
// soil-to-fertilizer map:
// fertilizer-to-water map:
// water-to-light map:
// light-to-temperature map:
// temperature-to-humidity map:
// humidity-to-location map:

let seeds = []

let locations = 999999999999999999999999

let transiction = 0

cleanInput.forEach((element) => {
    // seeds
    if (element.includes('seeds:')) {
        seeds = element.replace('seeds: ', "").split(' ')
    }
})

const calculateLocation = (seed) => {
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

    if (transiction < locations) {
        locations = transiction
        // console.log('seed', seed)
        // console.log('=> ', locations)
    }
}

seeds.forEach((el, index) => {

    if (index % 2 !== 0) {

        // console.log('Seed start group: ', Number(seeds[index-1]))

        for (let y = 0; y < Number(el); y++) {

            let seed = Number(seeds[index - 1]) + Number(y)
            calculateLocation(seed)
        }
    }
})

console.log('location:', locations)

// 2733200236 ++ -
// 1339903174 -
// 1613850892 -
// 3240216757 -
// 1184883841 -
// 1846989715 -
// 806029445 ++ -
// 2646025192 -
// 3334051813 -
// 2126918557 -

// brute force :)

// let group1 = seeds.slice(0,2)
// let group2 = seeds.slice(2,4)
// let group3 = seeds.slice(4,6)
// let group4 = seeds.slice(6,8)
// let group5 = seeds.slice(8,10)
// let group6 = seeds.slice(10,12)
// let group7 = seeds.slice(12,14)
// let group8 = seeds.slice(14,16)
// let group9 = seeds.slice(16,18)
// let group10 = seeds.slice(18,20)


// group1.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group1[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group1[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group2.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group2[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group2[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group3.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group3[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group3[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group4.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group4[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group4[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group5.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group5[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group5[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group6.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group6[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group6[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group7.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group7[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group7[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group8.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group8[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group8[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group9.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group9[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group9[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })

// group10.forEach((el, index) => {

//     if (index % 2 !== 0) {

//         console.log('Seed start group: ', Number(group10[index-1]))

//         for (let y = 0; y < Number(el); y++) {

//           let seed = Number(group10[index-1]) + Number(y)
//           calculateLocation(seed)
//         }
//     }
// })