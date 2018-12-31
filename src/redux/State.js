const LinkedList = require('../../utils/dataStructures/LinkedList')
const initialState = {}

function State(){
  this.stateTree = new LinkedList()
  this.stateTree.push(initialState)
}

State.prototype.getCurrentState = function(){
  return this.stateTree.tail.value
}

State.prototype.pushState = function(newState){
  this.stateTree.push(newState)
}

module.exports = State
