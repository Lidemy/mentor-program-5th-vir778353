const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', function(line) {
  lines.push(this.line)
})

rl.on('close', function() {
  solve(this.lines)
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
