import React from "react";
import styles from "./chartBar.module.css";

type Props = {
  text: string;
  color1: string;
  colors: string;
  percentage: number;
};

function index(props: Props) {
  return (
    <>
      <div className="container_blockUI1 flex bg-slate-200 text-white m-3">
        <div
          className={`title flex justify-end min-w-[150px] p-2 ${props.color1}`}
        >
          <span className="uppercase">{props.text}</span>
        </div>
        <div className="block_chart flex grow">
          <div
            className={`chart_children flex items-center`}
            style={{
              backgroundColor: props.colors,
              width: `${props.percentage}%`,
            }}
          >
            <span className="pl-5">{props.percentage}%</span>
          </div>
          <div className="chart"></div>
        </div>
      </div>
    </>
  );
}

export default index;
