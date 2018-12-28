import React from 'react'
import store from '../ducks/store'

const deleteLetter = () => {
  store.dispatch({
    type: 'delete',
  })
}

const DeleteLetterBox = () => (
  <div onClick={deleteLetter} style={{ backgroundColor: 'yellow'}}>
    <p>Click on the box to delete a letter</p>
  </div>
)

export default DeleteLetterBox
