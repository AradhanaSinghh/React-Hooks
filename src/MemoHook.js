import React, { useState, useMemo, useCallback } from "react";

const MemoHook = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log(num);
    for (let i = 0; i <= 100000; i++) {}
    return num;
  };

  // Wrap the result of countNumber function in useMemo to avoid unnecessary re-execution
//   const checkData = useMemo(() => {
//     return countNumber(myNum);
//   }, [myNum]);
  const checkData = useCallback(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My new number: {checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me, please"}
      </button>
    </>
  );
};

export default MemoHook;
