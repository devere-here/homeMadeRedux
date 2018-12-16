const createStore = require('../src/createStore')
const testReducers = require('./utils/testReducer')
const combineReducers = require('../src/combineReducers')


const { catReducer, dogReducer } = testReducers

const reducer = combineReducers({ cat: catReducer, dog: dogReducer })

const store = createStore(reducer)

console.log('first state', store.getState())
store.dispatch({ type: 'sad' })
console.log('second state', store.getState())
store.dispatch({ type: 'happy' })
console.log('third state', store.getState())

