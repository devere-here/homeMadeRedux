const isFunction = require('../../utils/helperFunctions/isFunction')

function Store (reducer) {
  this.reducer = reducer
  this.listeners = []
  this.cachedState = null
}

Store.prototype.getAccessToState = function(state){
  if (!this.cachedState) {
    this.cachedState = state
  }
}

Store.prototype.getState = function(){
  return this.cachedState.getCurrentState()
}

Store.prototype.dispatch = function(action){
  const { cachedState, reducer, listeners } = this

  let newState
  if (Object.keys(cachedState.stateTree.tail.value).length){
    newState = reducer(action, cachedState.stateTree.tail.value)
  } else {
    newState = reducer(action)
  }

  cachedState.pushState(newState)
  listeners.forEach(listener => listener())
}

Store.prototype.subscribe = function(listener) {
  if (!isFunction(listener)) throw new Error('you must pass a function to store.subscribe')

  this.listeners.push(listener)

  return function() {
    this.listeners = this.listeners.filter(elem => elem !== listener)
  }
}

Store.prototype.replaceReducer = function(nextReducer) {
  this.reducer = nextReducer
}

module.exports = Store
