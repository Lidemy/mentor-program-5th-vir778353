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
  const line = lines[0]
  const temp = line.split(' ')
  const startNum = Number(temp[0])
  const endNum = Number(temp[1])

  for (let i = startNum; i <= endNum; i++) {
    const digit = []
    let totalNum = 0
    let number = i
    if (i < 10) {
      console.log(i)
    } else {
      while (parseInt(number / 10) > 0) {
        digit.push(number % 10)
        number = parseInt(number / 10)
        if (number < 10) {
          digit.push(number % 10)
        }
      }
      for (let j = 0; j < digit.length; j++) {
        totalNum += Math.pow(digit[j], digit.length)
      }
      if (i === totalNum) {
        console.log(i)
      }
    }
  }
}
