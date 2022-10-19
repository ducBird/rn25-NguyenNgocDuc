import React from "react";

function Main() {
  console.log("Session 4 Basic:");

  //Bài 1:
  console.log("Bài 1: Kiểm tra mảng đối xứng");

  let array: number[] = [1, 2, 3, 2, 1, 1];
  let arrayLength = array.length;
  const isEqual = (Arr: number[], sizeArr: number) => {
    let j = sizeArr - 1;
    for (let i = 0; i < Math.round(sizeArr / 2); i++) {
      if (Arr[i] !== Arr[j]) return false;
      j--;
    }
    return true;
  };
  // console.log(isEqual(array, arrayLength));

  //Bài 2
  console.log("Bài 2: Đếm k trong mảng 2 chiều");
  const Bai2 = () => {
    let m = 3,
      n = 3,
      k = 4;
    let arrayXY: number[][] = [
      [2, 4, 6],
      [2, 3, 4],
      [5, 4, 88],
    ];
    let countValueK: number = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (arrayXY[i][j] === k) countValueK++;
      }
    }
    console.log(countValueK);
  };
  // Bai2();
  return (
    <>
      <div className="bai1 m-2"></div>
    </>
  );
}

export default Main;
