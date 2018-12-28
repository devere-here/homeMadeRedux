const initialState = {
  word: ''
}

function reducer (action, state = initialState) {
  console.log('in the reducer state is', state)
  switch (action.type) {
    case 'add':
      return Object.assign({}, state, { word: state.word + action.payload})
    case 'delete':
      return Object.assign({}, state, { word: state.word.slice(0, state.word.length - 1)})
    default:
      return state
  }
}

export default reducer
