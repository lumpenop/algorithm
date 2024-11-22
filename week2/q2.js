const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');
const find = input[0].split(' ')[1]
const arr = input.slice(1)

const arr2 = arr.map((item) => {
  const split = item.split(' ')
  const index = Number(split[0])
  const gold = Number(split[1])
  const silver = Number(split[2])
  const bronze = Number(split[3])
  return {index, gold, silver, bronze}
})

const sort = arr2.sort((a, b) => {
  return b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
})

const resultArr = sort.map((item) => {
  let rank = 1
  const {length} = sort

  for (let i = 0; i < length; i++) {
    if (item.gold < sort[i].gold) {
      rank++
      continue
    }
    if (item.gold === sort[i].gold && item.silver < sort[i].silver) {
      rank++
      continue
    }
    if (item.gold === sort[i].gold && item.silver === sort[i].silver && item.bronze < sort[i].bronze) {
      rank++
      continue
    }
  }
  return {...item, rank}
})

console.log(resultArr.find((item) => item.index === Number(find)).rank)

