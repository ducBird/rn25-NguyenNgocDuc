import React, { Component } from "react";
import { BiLike } from "react-icons/bi";

interface IProps {}

interface ILike {
  like: boolean;
}

export default class Class_LikeButton extends Component<IProps, ILike> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      like: false,
    };
  }

  setLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    return (
      <>
        <div
          onClick={this.setLike}
          className="inline-block border border-solid border-black p-2 m-1 px-5 rounded-lg cursor-pointer"
          style={this.state.like ? { color: "blue", borderColor: "blue" } : {}}
        >
          <BiLike className="inline text-2xl m-1 mr-2" />
          <span className="p-1">Like</span>
        </div>
      </>
    );
  }
}
