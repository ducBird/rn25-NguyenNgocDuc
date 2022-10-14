import React from "react";
import speaker from "../basic-images/3.jpg";
import "./style.css";

type IProps = {};

function index({}: IProps) {
  return (
    <div
      id="container"
      className="w-[550px] mx-auto border border-black m-1 p-2"
    >
      <img className="w-[60%] mx-auto" src={speaker} alt="" />
      <div className="text-contentUI3 w-[60%] mx-auto">
        <p>Technology</p>
        <h1 className="text-2xl py-2">
          Harman Kadon Onyx Studio Mini, Reviews & Experiences
        </h1>
        <p className="inline mr-1">Feb 21 , 2021 by</p>
        <span>drfurion</span>
      </div>
    </div>
  );
}

export default index;
