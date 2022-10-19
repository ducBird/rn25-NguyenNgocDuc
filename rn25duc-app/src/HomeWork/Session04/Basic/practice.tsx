/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

function practice() {
  let array: number[];
  const [text, setText] = useState([]);

  // const addValueInArray = () => {
  //   setText(text.push())
  // }

  // const checkEqual = (arr: number[]) => {
  //   for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index];
  //   }
  // };
  return (
    <>
      <div className="bai1 m-2">
        <p>Bài 1: Kiểm tra mảng đối xứng</p>
        <input
          id="SizeArray1"
          className="border border-black"
          type="text"
          placeholder="Số phần tử của mảng"
        />
        <br />
        <input
          id="Array1"
          className="border border-black w-[500px]"
          type="text"
          placeholder="Những phần tử của mảng cách nhau bởi dấu 'space'"
          onChange={(event) =>
            text.map((ele, index) => {
              // return text.concat(parseInt(event.target.value));
            })
          }
        />
        <button>Giải</button>
      </div>
    </>
  );
}

export default practice;
