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
    const temp = lines[i].split(' ')
    const strA = temp[0]
    const strB = temp[1]
    let result = 'DRAW'
    if (strA.length !== strB.length) {
      (strA.length > strB.length) ? result = 'A' : result = 'B'
    } else if (strA.length === strB.length) {
      for (let j = 0; j < strA.length; j++) {
        if (Number(strA[j]) > Number(strB[j])) {
          result = 'A'
          break
        } else if (Number(strA[j]) < Number(strB[j])) {
          result = 'B'
          break
        }
        // else {
        //   if (j === (strA.length - 1)) {
        //     result = 'DRAW'
        //   }
        // }
      }
    }
    if (Number(temp[2]) > 0) {
      console.log(result)
    } else {
      if (result === 'A') {
        result = 'B'
      } else if (result === 'B') {
        result = 'A'
      }
      console.log(result)
    }
  }
}
