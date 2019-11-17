import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0, sumOfClicks: 0, doubleClick: 0};
      }
    render() {
      return (
        <div>
          <button onClick={this.decrement.bind(this) }>-1</button>
          <output  onDoubleClick={this.double.bind(this)}>{this.state.counter}</output>
          <button onClick={this.increment.bind(this)}>+1</button>
          <output>{this.state.sumOfClicks}</output>
          <output>Podwójnych kliknięć: {this.state.doubleClick}</output>
        </div>
      );
    }

    increment() {
        this.setState({
          counter: this.state.counter + 1,
          sumOfClicks: this.state.sumOfClicks + 1
        })
      }

      decrement() {
        this.setState({
          counter: this.state.counter - 1,
          sumOfClicks: this.state.sumOfClicks + 1
        })
      }

      double(){
        this.setState({
        doubleClick: this.state.doubleClick + 1
        })
      } 
  }

  export default Counter;