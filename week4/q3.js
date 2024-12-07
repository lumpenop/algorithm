const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const arr = ['###  ..#  ###  ###  #.#  ###  ###  ###  ###  ###',
'#.#  ..#  ..#  ..#  #.#  #..  #..  ..#  #.#  #.#',
'#.#  ..#  ###  ###  ###  ###  ###  ..#  ###  ###',
'#.#  ..#  #..  ..#  ..#  ..#  #.#  ..#  #.#  ..#',
'###  ..#  ###  ###  ..#  ###  ###  ..#  ###  ###'].map(item => item.split('  '))

const target = input.map(item => item.split(' '))

const checkThisOut = (arrIndex, targetIndex) => {
  let count = 0
  Array.from({length: 5}).forEach((_, idx) => {
    const splitItem = arr[idx][arrIndex].split('')
    target[idx][targetIndex].split('').forEach((item, splitIndex) => {
      if (item === '#' && splitItem[splitIndex] === '#') {
        count++
      }
    })
  })
  return count
}
const findResult = (index) => {
  let point = 0
  let maxIndex = 0
  Array.from({length: 10}).forEach((_, idx) => {  
    const nowPoint = checkThisOut(idx, index)
    if (nowPoint > point) {
      point = nowPoint
      maxIndex = idx
    }
  })
  return maxIndex
}

const result = `${findResult(0)}${findResult(1)}:${findResult(2)}${findResult(3)}`
console.log(result)