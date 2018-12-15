const createStore = require('../src/createStore')
const reducer = require('./utils/testReducer')

const store = createStore(reducer)

console.log('old state', store.getState())
store.dispatch({ type: 'cat' })
console.log('new state', store.getState())
