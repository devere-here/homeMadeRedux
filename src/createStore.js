const Store = require('./Store')
const State = require('./State')

const createStore = (reducer) => {

  const store = new Store(reducer)
  const state = new State()

  store.getState = store.getAccessToState(state)

  return store
}

module.exports = createStore
