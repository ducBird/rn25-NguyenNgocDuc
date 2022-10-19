import React, { useState, useEffect } from "react";

function Demo() {
  const [number, setNumber] = useState(-1);
  const [like, setLike] = useState(false);

  useEffect(() => {
    //1 lần sau first render
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  // useEffect(() => {
  //   console.log("componentDidUpdate");
  // }); //componentDidUpdate: n lần

  useEffect(() => {
    console.log("componentDidUpdate number");
  }, [number]); //componentDidUpdate của 1 state: number: n lần nhưng chỉ chạy khi state(dependences) thay đổi

  let handleClick = () => {
    if (number === 5) {
    } else {
      console.log("Clicked!");
      setNumber(number + 1);
    }
  };

  let likeClick = () => {
    console.log("click like");
    setLike(!like);
  };

  return (
    <>
      <p>{number}</p>
      <button onClick={handleClick} disabled={number >= 10 ? true : false}>
        Click me!
      </button>
      <br />
      <button
        onClick={likeClick}
        style={like === true ? { color: "blue" } : { color: "black" }}
      >
        Like
      </button>
    </>
  );
}

export default Demo;
