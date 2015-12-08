import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component { 
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update (e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value 
    });
  }
  render() {
    return <div>
      {this.state.red}
      <Slider
        ref="red"
        update={this.update}/>
      <hr/>
      {this.state.green}
      <Slider
        ref="green"
        update={this.update}/>
      <hr/>
      {this.state.blue}
      <Slider
        ref="blue"
        update={this.update}/>
    </div>
  }
} 

App.propTypes = {
  num: React.PropTypes.number.isRequired
};

class Slider extends Component {
  render() {
    return (
        <input type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
    );
  }
}

export default App;
