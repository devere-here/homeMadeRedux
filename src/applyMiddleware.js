function applyMiddleware (...middleware) {
  return (dispatch, getState) => {
    return (action) => {
      middleware.forEach(func => {
        func(action, dispatch, getState)
      })
    }
  }
}

module.exports = applyMiddleware
