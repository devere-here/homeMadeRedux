const Store = require('./Store')
const State = require('./State')

const createStore = (reducer, middleware) => {
  const store = new Store(reducer)

  store.getAccessToState(new State())
  if (middleware) {
    let { dispatch, getState } = store
    dispatch = middleware(dispatch.bind(store), getState)
  }
  return store
}

module.exports = createStore
