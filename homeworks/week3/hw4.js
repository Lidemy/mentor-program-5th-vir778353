const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const strLength = lines[0].length
  let resultStr = ''
  for (let i = (strLength - 1); i >= 0; i--) {
    resultStr += lines[0][i]
  }
  (lines[0] === resultStr) ? console.log('True') : console.log('False')
}
