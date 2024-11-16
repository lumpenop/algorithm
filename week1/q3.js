// 주어진 문자열 배열에서 다른 문자열들과 구성요소(문자)가 다른 유일한 문자열을 찾는 함수를 작성하시오.
//   문제 조건
// 배열에는 2개 이상의 문자열이 포함되어 있으며, 단 하나의 고유한(다른) 문자열이 존재합니다.
//   문자열은 대소문자를 구분하지 않으며, 모든 문자는 동일하게 취급됩니다.
//   문자열에 공백이 포함될 수 있지만, 공백은 무시됩니다.
//   즉, 공백만 포함된 문자열은 빈 문자열로 간주됩니다.
//   유일한 문자열을 찾아 반환해야 합니다.
//   ex) findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])의 결과는 'BbBb'입니다.
//   'BbBb'만 다른 구성 문자로 이루어져 있습니다.
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])의 결과는 'foo'입니다.
// 'foo'만 다른 구성 문자로 이루어져 있습니다.


const findUniq = (arr) => {
  const arr2 = arr.map(item => {
    const {length} = item
    return item.toLowerCase().split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0)/length
  })
  const isSame = arr2[0] === arr2[arr2.length - 1]
  if (isSame) {
    const resultIndex = arr2.findIndex((element) => element !== arr2[0])
    return arr[resultIndex]
  }
  if (arr2[0] === arr2[1]) {
    return arr[arr2.length - 1]
  }
  return arr[0]
}

const result1 = findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
const result2 = findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])
console.log(result1)
console.log(result2)
