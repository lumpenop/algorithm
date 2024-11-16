

// 배열을 입력값으로 받아서, 모든 0을 배열의 끝으로 이동시키는 함수를 작성하시오.
// (단, 다른 요소들의 순서는 유지되어야 한다.)
// ex)  moveZeros([false,1,0,1,2,0,1,3,"a"])
// returns[false,1,1,2,1,3,"a",0,0]



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
