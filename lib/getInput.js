const fs = require('fs')
const path = require('path')

const getInput = (inputPath) => {
  try {
    return fs.readFileSync(path.join(inputPath, 'input.txt'), 'utf8')
  } catch (e) {
    console.log('Error:', e.stack)
    return e.stack
  }
}

module.exports = getInput