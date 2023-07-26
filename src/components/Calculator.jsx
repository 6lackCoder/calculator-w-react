import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const displayContent = (value) => {
    if (displayValue === "0") setDisplayValue(value);
    else setDisplayValue((prevValue) => prevValue + value);
  };

  const answer = ()=>{
    try {
      const result = eval(displayValue)
      setDisplayValue(result.toString())
    } catch (error) {
      setDisplayValue('Error')
    }
  }

  const handleClear = ()=>{
    setDisplayValue('');
  }

  return (
    <div className=" mt-6 mx-[auto] h-[40rem] w-[25rem] ring-1 ring-black p-5">
      <div className=" h-[7rem] w-[23rem] ring-1 ring-black">
        {displayValue}
      </div>
      <div>
        <div className=" grid grid-cols-4 h-[5rem] my-[1rem] ring-1 ring-black">
          <button onClick={() => displayContent("9")}>9</button>
          <button onClick={() => displayContent("8")}>8</button>
          <button onClick={() => displayContent("7")}>7</button>
          <button onClick={() => displayContent("+")}>+</button>
        </div>
        <div className=" h-[7rem] grid grid-cols-4 my-[1rem] ring-1 ring-black">
          <button onClick={() => displayContent("6")}>6</button>
          <button onClick={() => displayContent("5")}>5</button>
          <button onClick={() => displayContent("4")}> 4</button>
          <button onClick={() => displayContent("-")}>-</button>
        </div>
        <div className=" h-[7rem] grid grid-cols-4 my-[1rem] ring-1 ring-black">
          <button onClick={() => displayContent("3")}>3</button>
          <button onClick={() => displayContent("2")}>2</button>
          <button onClick={() => displayContent("1")}>1</button>
          <button onClick={() => displayContent("*")}>*</button>
        </div>
        <div className=" h-[7rem] grid grid-cols-4 my-[1rem] ring-1 ring-black">
          <button onClick={handleClear}>clear</button>
          <button onClick={() => answer()}>=</button>
          <button onClick={() => displayContent("/")}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
