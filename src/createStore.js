const Store = require('./Store')
const State = require('./State')

const createStore = (reducer) => {
  const store = new Store(reducer)

  store.getAccessToState(new State())
  return store
}

module.exports = createStore
