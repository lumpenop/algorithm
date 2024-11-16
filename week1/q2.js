
// 주어진 정수 배열에서 연속된 부분 배열 중 합이 최대가 되는 값을 찾는 함수를 작성하시오.
//   ex) maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// 6 ([4, -1, 2, 1]의 합이 최대)

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
