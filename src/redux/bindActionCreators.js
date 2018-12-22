const bindActionCreator = (actionCreators, dispatch) => {
  const boundActionCreators = {}
  for (const key in actionCreators) {
    boundActionCreators[key] = (...args) => {
      dispatch(actionCreators[key](...args))
    }
  }
  return boundActionCreators
}

module.exports = bindActionCreator
