const arr = [5, 1, 4, 2, 8]


const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j=i; j<arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))