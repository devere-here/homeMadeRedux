function testReducer (state = initialState, action) {
  switch (action.type) {
    case 'cat':
      return 'meow'
    default:
      return state
  }
}

module.exports = testReducer
