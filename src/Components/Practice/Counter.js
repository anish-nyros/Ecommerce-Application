import React from "react";
import CustomHooks  from "./CustomHooks";

function Counter() {
  const [count, increment, decrement, reset] = CustomHooks(10);
  const [item, incrementby1, decrementby1, resetbyO] = CustomHooks(5);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <br />
      <div>
        <button onClick={increment}>
          <b>Increment by 1</b>
        </button>{" "}
        <br />
        <button onClick={decrement}>
          <b>Decrement by 1</b>
        </button>{" "}
        <br />
        <button onClick={reset}>
          <b>Reset</b>
        </button>
      </div>
      <br/><br/>
      <h1>Counter : {item}</h1>
      <br />
      <div>
        <button onClick={incrementby1}>
          <b>Increment by 1</b>
        </button>{" "}
        <br />
        <button onClick={decrementby1}>
          <b>Decrement by 1</b>
        </button>{" "}
        <br />
        <button onClick={resetbyO}>
          <b>Reset</b>
        </button>
      </div>
    </div>
  );
}

export default Counter;
