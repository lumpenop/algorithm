
const maxSequence = (arr) => {
  let maxAt = 0
  let result = 0
  arr.forEach(num => {
    maxAt = Math.max(num, maxAt + num)
    result = Math.max(maxAt, result)
  })
  console.log(result)
}


maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
