const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// rl.on('line', function(line) {
//   lines.push(line)
// })

rl.on('line', (line) => {
  lines.push(line)
})

// rl.on('close', function() {
//   solve(lines)
// })

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const number = Number(lines[0])
  for (let i = 0; i < number; i++) {
    let star = ''
    for (let j = 0; j <= i; j++) {
      star += '*'
    }
    console.log(star)
  }
}
