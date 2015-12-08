import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component { 
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      inc: false
    };
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val+1} />,
        document.getElementById('app')
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({inc: nextProps.val > this.props.val});
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
  render() {
    console.log(this.state.inc);
    return (
      <button onClick={this.update}>
        {this.props.val}
      </button>
    );
  }
} 

App.defaultProps = {val: 0};

export default App;
