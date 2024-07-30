import React, { useState } from "react";

function MyBtn({ title, count1, count2 }) {
  const [count, setCount] = useState(count1);
  const [minus, setMinus] = useState(count2);

  const handleCount1Plus = () => {
    setCount(count + 1);
  };

  const handleCount2Minus = () => {
    setMinus(minus - 1);
  };

  const resetPlusBtn = () => {
    setCount(count1);
  };
  
  const resetMinusBtn = () => {
    setMinus(count2);
  };


  //   const handleCount1Minus = () => {
  //     setCount(count - 1);
  //   };

  //   const handleCount2Plus = () => {
  //     setMinus(minus + 1);
  //   };

  // const resetMinusBtn = () => {
  //     setCount(0);
  // }

  return (
    <>
      <div className="text-center m-5">
        <h1 className="m-4">{title}</h1>
        <button
          className="border border-purple-800"
          onClick={handleCount1Plus}
        >
          Plus (+) {count}
        </button>
        <button className="bg-red-600 p-2  mx-5" onClick={resetPlusBtn}>
          Reset
        </button>
        <button
          className="border border-purple-800 px-9"
          onClick={handleCount2Minus}
        >
          Minus (-) {minus}
        </button>
        <button className="bg-red-600 p-2  mx-5" onClick={resetMinusBtn}>
          Reset
        </button>
      </div>
    </>
  );
}

export default MyBtn;
