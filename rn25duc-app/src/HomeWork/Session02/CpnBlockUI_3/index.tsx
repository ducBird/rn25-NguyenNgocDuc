import React from "react";
import { IconType } from "react-icons";

type Props = {
  text: string;
  color: string;
  iconName: JSX.Element;
  total: number;
  unit: string; // unit='Likes' hoặc unit='Tweets', ...
};

function index(props: Props) {
  return (
    <>
      <div
        className={`ctn_BlockUI3 inline-block w-[200px] m-2 text-white ${props.color}`}
      >
        <div className="content h-[200px]">
          <div className="icon text-3xl p-4">{props.iconName}</div>
        </div>
        <div className="text-content pb-3">
          <h3 className="text-title mx-2 px-2 text-2xl">{props.text}</h3>
          <span className="text-xs mx-3 px-1">{props.total}</span>
          <span className="text-xs mx-3 px-1">{props.unit}</span>
        </div>
      </div>
    </>
  );
}

export default index;
