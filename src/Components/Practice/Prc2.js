import React,{useState} from "react";

export const Prc2 = ({counter , title, setCounter, setTitle}) => {
    const handleIncrement = ()=>{
        counter = counter + 1;
        setCounter(counter);
        console.log("clciked increment ",counter);
    }
    const handleDecrement = ()=>{
        counter = counter - 1;
        setCounter(counter);
        console.log("clciked decrement ",counter);
    }
    const handleTitle = ()=>{
        title = "title clicked";
        setTitle(title);
        console.log("clciked title ",title);
    }
  return (
    <div>
      <button onClick={()=> handleIncrement()}>Increment</button>
      <button onClick={()=> handleDecrement()} >Decrement</button>
      <button onClick={()=> handleTitle()}>Title</button>
    </div>
  );
};
