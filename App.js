import React, { Component } from 'react';
class App extends Component { 
  constructor() {
    super();
    this.state = {
      txt: 'this is state text'
    };
    this.update = this.update.bind(this);
  }
  update (e) {
    this.setState({
      txt: e.target.value
    });
  }
  render() {
    return <div>
      <Widget txt={this.state.txt}
        num={this.props.num}
        update={this.update}/>
    </div>
  }
} 

App.propTypes = {
  num: React.PropTypes.number.isRequired
};

const Widget = (props) => {
  let num = props.num;
  let txt = props.txt;
  let result = txt + " " + num;
  return (
    <div>
      <input type="text" onChange={props.update} />
      <div>{result}</div>
    </div>
  );
};

export default App;
