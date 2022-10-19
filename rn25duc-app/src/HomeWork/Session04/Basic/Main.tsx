import React from "react";

function Main() {
  console.log("Session 4 Basic:");

  //Bài 1:
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
  console.log(`- Bài 1: ${isEqual(array, arrayLength)}`);

  //Bài 2
  return (
    <>
      <div className="bai1 m-2"></div>
    </>
  );
}

export default Main;
