/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import * as biIcon from "react-icons/bi";
function index() {
  interface ILike {
    like: boolean;
  }
  const [isLike, setIsLike] = useState<ILike>({
    like: false,
  });

  const handleClick = () => {
    setIsLike({ ...useState, like: !isLike.like });
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="inline-block border border-solid border-black p-2 m-1 px-5 rounded-lg cursor-pointer"
        style={isLike.like ? { color: "blue", borderColor: "blue" } : {}}
      >
        <biIcon.BiLike className="inline text-2xl m-1 mr-2" />
        <span className="p-1">Like</span>
      </div>
    </>
  );
}

export default index;
