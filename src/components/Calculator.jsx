import React from "react";

const Calculator = () => {


const displayContent = ()=>{

}


  return (
    <div className=" mt-6 mx-[auto] h-[40rem] w-[25rem] ring-1 ring-black p-5">
      <div className=" h-[7rem] w-[23rem] ring-1 ring-black"></div>
      <div>
        <div className=" grid grid-cols-3 h-[5rem] my-[1rem] ring-1 ring-black">
        <button>9</button><button>8</button> <button>7</button>
        </div>
        <div className=" h-[7rem] grid grid-cols-3 my-[1rem] ring-1 ring-black">
        <button>6</button><button>5</button> <button>4</button>
       </div>
       <div className=" h-[7rem] grid grid-cols-3 my-[1rem] ring-1 ring-black">
       <button>3</button><button>2</button> <button>1</button>
       </div>
       <div className=" h-[7rem] grid grid-cols-2 my-[1rem] ring-1 ring-black">
        <button>clear</button>
        <button>=</button>
       </div>
        </div>
    </div>
  );
};

export default Calculator;
