import React from "react";
import clother from "../basic-images/1.jpg";
import "./style.css";

type Props = {};

function BasicUI_1({}: Props) {
  return (
    <div
      id="container"
      className="flex w-[550px] mx-auto border border-black m-1 pr-10"
    >
      <img src={clother} alt="" />
      <div className="text-content">
        <h1 className="text-2xl py-2">Clothing & Apparel</h1>
        <p>Accessories</p>
        <p>Bags</p>
        <p>Kid's Fashion</p>
        <p>Mens</p>
      </div>
    </div>
  );
}

export default BasicUI_1;
