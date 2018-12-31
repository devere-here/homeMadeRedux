const React = require('react');
const defaultMerge = require('./utils/mergeProps');
const Context = require('./Provider');

const connect = (mapStateToProps, mapDispatchToProps, mergeProps = defaultMerge) => {
  return function (Component) {
    return (props) => (
      <Context.Consumer>
        {store => {
          const stateProps = mapStateToProps(store.getState(), props)
          const dispatchProps = mapDispatchToProps(store.dispatch)
          const combinedProps = mergeProps(stateProps, dispatchProps, props)

          return (
            <Component props={combinedProps} />
          )
        }}
      </Context.Consumer>
    )
  }
}

module.exports = connect
