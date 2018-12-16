const initialState = ''

function catReducer (state = initialState, action) {
  switch (action.type) {
    case 'sad':
      return 'mew'
    case 'angry':
      return 'hiss'
    case 'happy':
      return 'purr'
    default:
      return state
  }
}

function dogReducer (state = initialState, action) {
  switch (action.type) {
    case 'happy':
      return 'bark'
    case 'angry':
      return 'growl'
    case 'sad':
      return 'wimper'
    default:
      return state
  }
}

module.exports = { catReducer, dogReducer }
