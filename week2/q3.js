// https://www.acmicpc.net/problem/9017

const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const arr = input.slice(1)
let arr2 = arr.filter((_, index) => index % 2 !== 0)

const arr3 = arr2.map(item => {
  const obj = {}
  const splitItem = item.split( ' ')
  const setItem = new Set(splitItem)
  const newArr = [...setItem]
  newArr.forEach((element) => obj[element] = {index: element, score: 0, total: 0, five: []})
  splitItem.forEach((element, index) => {
    obj[element].total++
  })
  const filtered = splitItem.filter((element) => obj[element].total >= 6)

  filtered.forEach((element, index) => {
    obj[element].five.push(index + 1)
  })
  filtered.forEach((element) => obj[element].score = obj[element].five.slice(0, 4).reduce((acc, curr) => acc + curr, 0))
  const result = Object.keys(obj).map((key, index) => obj[key]).filter((element) => element.score !== 0)
  return result
})
const result = arr3.map(item => {
  return item.sort((a, b) => a.score - b.score || a.five[4] - b.five[4])
})

let resultString = ''
result.forEach((item, index) => {
  if (index !== result.length -1) resultString += `${item[0].index}\n`
  else resultString += `${item[0].index}`
})
console.log(resultString)


