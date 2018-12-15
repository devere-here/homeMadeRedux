function Store (reducer) {
  this.reducer = reducer
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
}

Store.prototype.subscribe = function() {
  console.log('in subscribe')
}

module.exports = Store
