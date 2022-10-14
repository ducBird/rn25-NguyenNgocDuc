import React, { Component } from "react";

type Props = {};

type State = {
  number: number;
};

class exState extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default exState;
