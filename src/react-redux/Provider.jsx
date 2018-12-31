const React = require('react');
const Context = React.createContext()

const Provider = (props) => (
  <Context.Provider value={props.store}>
    {props.children}
  </Context.Provider>
)

module.exports = { Provider, Context }
