const compose = require('../src/redux/compose')

const a = (num) => {
  console.log('in a')
  return num / 2
}

const b = (num) => {
  console.log('in b')
  return num + 3
}

const c = (num) => {
  console.log('in c')
  return num + 4
}

const d = (num) => {
  console.log('in d')
  return num * 5
}

const someSum = compose(a, b, c, d)

console.log('the sum is', someSum(10))
