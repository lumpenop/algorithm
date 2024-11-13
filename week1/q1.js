
const moveZeros = (arr) => {
  const zeros = []
  const result =  arr.filter((item) => {
    if (item === 0) {
      zeros.push(0)
      return false
    }
    return true
  }).concat(zeros)
  console.log(result)
}
moveZeros([false,1,0,1,2,0,1,3,"a"])
