function Store () {}

Store.prototype.getAccessToState = state => {
  let cachedState
  if (!cachedState) {
    cachedState = state
  }

  return () => cachedState.getCurrentState()
}

Store.prototype.dispatch = (state, action) => {
  console.log('in dispatch state is', state, 'action is', action)
}

Store.prototype.subscribe = function() {
  console.log('in subscribe')
}

module.exports = Store
