
const findUniq = (arr) => {
  const obj = {}
  const arr2 = arr.map(item => {
    const {length} = item
    return item.toLowerCase().split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0)/length
  })
  arr2.forEach(item => {
    obj[item] = 0
  })
  arr2.forEach(item => {
    obj[item] = obj[item] + 1
  })
  const keys = Object.keys(obj)
  const result = keys.filter(key => {
    return obj[key] === 1;
  })
  const resultIndex = arr2.findIndex(item => item === Number(result[0]))
  console.log(arr[resultIndex])
}

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])
