import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component { 
  constructor() {
    super();
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      val: this.state.val+1
    });
  }
  componentWillMount() {
    console.log('Mounting');
  }
  componentDidMount() {
    console.log('Mounted');
  }
  componentWillUnmount() {
    console.log('Done some clean up, bye!');
  }
  render() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val}</button>
  }
} 

class Wrapper extends Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<App/>, document.getElementById('a'));    
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount!</button>
        <button onClick={this.unmount.bind(this)}>Unmount!</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;
