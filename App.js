import React, { Component } from 'react';
class App extends Component { 
  constructor() {
    super();
    this.state = {
      txt: 'this is state text'
    };
  }
  update (e) {
    this.setState({
      txt: e.target.value
    });
  }
  render() {
    let num = this.props.num;
    let txt = this.state.txt;
    let result = txt + " " + num;
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <div>{result}</div>
      </div>
    );
  }
} 

App.propTypes = {
  num: React.PropTypes.number.isRequired
};

export default App;
