const LinkedList = require('../utils/dataStructures/LinkedList')
const initialState = {
  type: '@@init'
}

function State(){
  this.stateTree = new LinkedList()
  this.stateTree.push(initialState)
}

State.prototype.getCurrentState = function(){
  return this.stateTree.tail
}

module.exports = State
