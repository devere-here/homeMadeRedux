const compose = (...funcArr) => {
  return (...args) => {
    let lastIdx = funcArr.length - 1
    let result = funcArr[lastIdx](...args)

    for (let i = lastIdx - 1; i >= 0; i--) {
      result = funcArr[i](result)
    }
    return result
  }
}

module.exports = compose
