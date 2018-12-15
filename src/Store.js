const isFunction = require('../utils/helperFunctions/isFunction')

function Store (reducer) {
  this.reducer = reducer
  this.listeners = []
  this.cachedState = null
}

Store.prototype.getAccessToState = function(state){
  if (!this.cachedState) {
    this.cachedState = state
  }
  return () => this.cachedState.getCurrentState()
}

Store.prototype.dispatch = function(action){
  const { cachedState, reducer } = this
  const newState = reducer(cachedState, action)

  cachedState.pushState(newState)
  this.listeners.forEach(listener => listener())
}

Store.prototype.subscribe = function(listener) {
  if (!isFunction(listener)) throw new Error('you must pass a function to store.subscribe')

  this.listeners.push(listener)

  return function() {
    this.listeners = this.listeners.filter(elem => elem !== listener)
  }
}

module.exports = Store
