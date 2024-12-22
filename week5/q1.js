const input = require('fs').readFileSync('./dev/stdin/index.txt').toString().trim().split('\n');

const sliceInput = input.slice(1)

const [operand, ...numbers] = sliceInput

const operator = ['+', '-', '*', '/']
const stack = []
for (const string of operand) {
  if (operator.includes(string)) {
    const a = stack.pop()
    const b = stack.pop()
    const result = eval(`${b}${string}${a}`)
    stack.push(result)
  } else {
    stack.push(numbers[string.charCodeAt(0) - 65])
  }
}
console.log(stack[0].toFixed(2))