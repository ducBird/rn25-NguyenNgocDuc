/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import * as faIcon from "react-icons/fa";
function index() {
  const starDefault = {
    display: "inline",
    fontSize: "24px",
    margin: "4px",
    marginRight: "8px",
    cursor: "pointer",
    // color: "yellow",
  };
  const starSelect = {
    display: "inline",
    fontSize: "24px",
    margin: "4px",
    marginRight: "8px",
    cursor: "pointer",
    color: "yellow",
  };

  const [star, setStar] = useState(0);
  const starIcon: JSX.Element[] = [];
  for (let index = 1; index <= 5; index++) {
    starIcon.push(
      <faIcon.FaStar
        onClick={() => {
          setStar(index);
        }}
        style={index <= star ? starSelect : starDefault}
      />
    );
  }

  return (
    <>
      <div className="rating inline-block m-2 border border-black">
        {starIcon}
        <p>{star}</p>
      </div>
    </>
  );
}

export default index;
