import React from 'react'
import store from '../ducks/store'

const addLetter = () => {
  const number = Math.floor(Math.random() * 25) + 65
  const letter = String.fromCharCode(number)
  store.dispatch({
    type: 'add',
    payload: letter
  })
}

const AddLetterBox = () => (
  <div onClick={addLetter} style={{ backgroundColor: 'lightgreen'}}>
    <p>Click on the box to add a letter</p>
  </div>
)

export default AddLetterBox
