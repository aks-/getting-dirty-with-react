import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component { 
  render() {
    return <Button>Emma Button!</Button>
  }
} 

const Button = (props) => <button>{props.children}</button>

export default App;
