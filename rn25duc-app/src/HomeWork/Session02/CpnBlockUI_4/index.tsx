import React from "react";
import { ArrayBindingElement } from "typescript";
import styles from "./styleBI4.module.css";

type Props = {
  text: string;
  total: number;
  unit: string; // unit='' hoặc unit='$', ...
  percentages: number[];
};

function index(props: Props) {
  // let array: number[] = [];
  // props.percentages.forEach((element) => {
  //   array.push(element);
  // });
  return (
    <div className={`${styles.container_BlockUI4}`}>
      <div className="content_1 py-6 px-20 border-b-2 text-center uppercase">
        <h3 className="text-xl text-gray-500 pb-4 ">{props.text}</h3>
        <span className="text-6xl text-blue-400">{props.unit}</span>
        <span className="text-6xl text-blue-400">{props.total}</span>
      </div>
      <div className="content_2 py-6 px-20">
        <div className="chart flex justify-around">
          <div className={`${styles.chartChildren}`}>
            <div className={`column_chart border ${styles.column_chart}`}>
              <div
                className={`select`}
                style={{
                  backgroundColor: "red",
                  height: `${props.percentages[0]}%`,
                }}
              ></div>
            </div>
            <div className="title_chart">mon</div>
          </div>

          <div className={`${styles.chartChildren}`}>
            <div className={`column_chart border ${styles.column_chart}`}>
              <div
                className={`select`}
                style={{
                  backgroundColor: "green",
                  height: `${props.percentages[1]}%`,
                }}
              ></div>
            </div>
            <div className="title_chart">tue</div>
          </div>

          <div className={`${styles.chartChildren}`}>
            <div className={`column_chart border ${styles.column_chart}`}>
              <div
                className={`select`}
                style={{
                  backgroundColor: "yellow",
                  height: `${props.percentages[2]}%`,
                }}
              ></div>
            </div>
            <div className="title_chart">web</div>
          </div>

          <div className={`${styles.chartChildren}`}>
            <div className={`column_chart border ${styles.column_chart}`}>
              <div
                className={`select`}
                style={{
                  backgroundColor: "blue",
                  height: `${props.percentages[3]}%`,
                }}
              ></div>
            </div>
            <div className="title_chart">thu</div>
          </div>

          <div className={`${styles.chartChildren}`}>
            <div className={`column_chart border ${styles.column_chart}`}>
              <div
                className={`select`}
                style={{
                  backgroundColor: "orange",
                  height: `${props.percentages[4]}%`,
                }}
              ></div>
            </div>
            <div className="title_chart">fri</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
