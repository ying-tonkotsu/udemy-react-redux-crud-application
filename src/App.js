import React, { Component } from 'react';


const App = () => (<Counter></Counter>);
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const state = this.state;
    return (
      <div>
        <div>count : {state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </div>
    );
  }
};


export default App;
