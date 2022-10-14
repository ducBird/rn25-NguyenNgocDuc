import React, { useState } from "react";

type Props = {};

function ExStateFC({}: Props) {
  interface ObjectNumber {
    number1: number;
  }
  // const [nameState, setNameState] = useState(1); //cách khai báo state cơ bản
  const [nameState, setNameState] = useState<ObjectNumber>({
    number1: 0,
  });

  const handleClick = () => {
    setNameState({ ...useState, number1: nameState.number1 + 1 });
  };

  return (
    <div>
      <button onClick={handleClick}>Funtional Components Click</button>
      <p>{nameState.number1}</p>
    </div>
  );
}

export default ExStateFC;
