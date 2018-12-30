const react = require('react');
const defaultMerge = require('./mergeProps');
const fakeStore = {};


const connect = (mapStateToProps, mapDispatchToProps, mergeProps = defaultMerge) => {
  // get access to store here
  let stateProps = mapStateToProps(store.getState().value)
  const dispatchProps = mapDispatchToProps(store.dispatch)
  const initialProps = mergeProps(stateProps, dispatchProps)

  return function (Component) {
    return class extends React.Component {
      state = initialProps

      componentDidMount(){
        store.subscribe(() => {
          stateProps = mapStateToProps(store.getState().value, this.props)
          const nextProps = mergeProps(stateProps, dispatchProps, ownProps)
          this.setState(nextProps)
        })

      }

      render(){
        <Component props={...this.state} />
      }

    }
  }
}