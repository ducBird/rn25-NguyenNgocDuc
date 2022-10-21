import React, { Component } from "react";
import * as faIcon from "react-icons/fa";
interface IProps {}

interface IStar {
  star: number;
}

export default class Class_RatingStar extends Component<IProps, IStar> {
  starDefault = {
    display: "inline",
    fontSize: "24px",
    margin: "4px",
    marginRight: "8px",
    cursor: "pointer",
    // color: "yellow",
  };
  starSelect = {
    display: "inline",
    fontSize: "24px",
    margin: "4px",
    marginRight: "8px",
    cursor: "pointer",
    color: "yellow",
  };

  arrStar = [1, 2, 3, 4, 5];

  constructor(props: IProps) {
    super(props);
    this.state = {
      star: 0,
    };
  }

  // setStar = () => {
  //   this.setState({
  //     star: index,
  //   });
  // };
  render() {
    return (
      <>
        <span>{this.state.star + 1}</span>
        {this.arrStar.map((element, index) => {
          return (
            <faIcon.FaStar
              onClick={() => {
                this.setState({
                  star: index,
                });
              }}
              style={
                index <= this.state.star ? this.starSelect : this.starDefault
              }
            />
          );
        })}
      </>
    );
  }
}
