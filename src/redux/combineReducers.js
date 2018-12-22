const combineReducers = (reducerObj) => {
  return function (state, action) {
    const newState = {}

    for (key in reducerObj) {
      newState[key] = reducerObj[key](state[key], action)
    }
    return newState
  }
}

module.exports = combineReducers
