const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const arr = input.slice(1)

const arr2 = arr.map((item, index) => {
  const [weight, height] = item.split(' ')
  return {index, weight: Number(weight), height: Number(height)}
})


const sortedWeight = arr2.sort((a, b) => {
  return b.weight - a.weight || b.height - a.height
})

const result = sortedWeight.map((item, index) => {
  let rank = 1
  const {length} = sortedWeight
  for (let i = 0; i < length; i ++) {
    if (sortedWeight[i].weight > item.weight && sortedWeight[i].height > item.height) {
      rank++
    }
  }
  return {...sortedWeight[index], rank }
})
console.log(result.sort((a, b) => a.index - b.index).map(item => item.rank).join(' '))
