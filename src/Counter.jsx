import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>You clicked {this.state.count} times.</p>
      </div>
    );
  }
}

export default Counter;
