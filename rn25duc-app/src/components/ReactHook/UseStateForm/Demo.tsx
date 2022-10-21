import React, { useState } from "react";

function Demo() {
  const [text, setText] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(text, isCheck);
  };
  const handleKeyDown = (e: any) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const handleCheck = (e: any) => {
    setIsCheck(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleKeyDown}
          value={text}
          className="border border-black"
        />
        <input type="checkbox" checked={isCheck} onChange={handleCheck} />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default Demo;
