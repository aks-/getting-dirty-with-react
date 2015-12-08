import React, { Component } from 'react';
class App extends Component { 
  render() {
    let num = this.props.num;
    let txt = this.props.txt;
    let result = txt + " " + num;
    return <div>{result}</div>;
  }
} 

App.propTypes = {
  txt: React.PropTypes.string,
  num: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'Hey your number is'
};

export default App;
