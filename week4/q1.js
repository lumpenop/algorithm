const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)
const find = input[1].split(' ').map(Number)

let answer = 0

let arr = Array.from({length: N}, (_, i)=> i + 1)

const isLeft = (num) => {
  return arr.indexOf(num) < arr.length / 2
}

const left = () => {
  arr.push(arr.shift())
  answer++
}

const right = () => {
  arr.unshift(arr.pop())
  answer++
}

const findShift = (item) => {
  if (item === arr[0]) {
    arr.shift()
    return true
  }
  return false
}

find.forEach((item) => {
  while (!findShift(item)) {
    if (isLeft(item)) left()
    else right()
  }
})

console.log(answer)