import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

  
  }
  render() {
    return (
    <>
    <h1>Counter: {this.state.counter}</h1>
    <button onClick={()=>{this.setState({counter: this.state.counter +1})}}>+</button>
    <button onClick={()=>{this.setState({counter: this.state.counter -1})}}>-</button>
    <button onClick={()=>{this.setState({counter: 0})}}>zero</button>

    </>
  )
  }
}

export default Counter;
