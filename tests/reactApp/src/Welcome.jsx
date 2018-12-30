import React from 'react'
import store from '../ducks/store'
import AddLetter from './AddLetter.jsx'
import DeleteLetter from './DeleteLetter.jsx'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Welcome</h1>
        <p>Hello Steven</p>
        <h1>The word is {this.state.word}</h1>
        <AddLetter />
        <DeleteLetter />
      </div>
    );
  }
}

export default Welcome
