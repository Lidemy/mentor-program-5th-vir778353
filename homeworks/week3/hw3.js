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
  for (let i = 1; i <= Number(lines[0]); i++) {
    isPrime(Number(lines[i])) ? console.log('Prime') : console.log('Composite')
  }
}

function isPrime(number) {
  const endNumber = parseInt(number / 2)
  if (number === 1) {
    return false
  } else if (number < 4) {
    return true
  }

  for (let i = 2; i <= endNumber; i++) {
    if ((number % i) === 0) {
      return false
    }
    if (i === endNumber) {
      return true
    }
  }
}
