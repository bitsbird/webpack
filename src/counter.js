import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  climb() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div onClick={this.climb.bind(this)}>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}
