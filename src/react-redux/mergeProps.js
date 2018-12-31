const mergeProps = (stateProps, dispatchProps, ownProps = {}) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
})

module.exports = mergeProps
