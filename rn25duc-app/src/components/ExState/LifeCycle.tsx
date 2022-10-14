import React, { Component } from "react";

type Props = {};

type State = {
  number: number;
};

class LifeCycle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      number: 100,
    };
    console.log("constructor");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    setInterval(() => {
      this.setState({ number: this.state.number - 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="text-center">
        <button className="mt-2" onClick={this.handleClick}>
          CountDown
        </button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default LifeCycle;
