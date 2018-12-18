const Store = require('./Blorp')
const State = require('./State')

const createStore = (reducer) => {
  const store = new Store(reducer)

  store.getAccessToState(new State())
  return store
}

module.exports = createStore
