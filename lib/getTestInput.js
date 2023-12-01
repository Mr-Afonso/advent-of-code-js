const fs = require('fs')
const path = require('path')

const getTestInput = (inputPath) => {
  try {
    return fs.readFileSync(path.join(inputPath, 'testInput.txt'), 'utf8')
  } catch (e) {
    console.log('Error:', e.stack)
    return e.stack
  }
}

module.exports = getTestInput