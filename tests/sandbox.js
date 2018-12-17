const createStore = require('../src/createStore')
const testReducers = require('./utils/testReducer')
const combineReducers = require('../src/combineReducers')
const applyMiddleware = require('../src/applyMiddleware')

const { catReducer, dogReducer } = testReducers

const reducer = combineReducers({ cat: catReducer, dog: dogReducer })

const testMiddleware = (action, dispatch, getState) => {
  console.log('hello i am middleware')
  dispatch(action)
}

const store = createStore(reducer, applyMiddleware(testMiddleware))

console.log('first state', store.getState())
store.dispatch({ type: 'sad' })
console.log('second state', store.getState())
store.dispatch({ type: 'happy' })
console.log('third state', store.getState())

