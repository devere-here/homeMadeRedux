const Store = require('./Store')
const State = require('./State')

const createStore = (reducer) => {

  const store = new Store()
  const state = new State()

  store.getState = store.getAccessToState(state)
  console.log('get that state', store.getState())

  return store
}

createStore()