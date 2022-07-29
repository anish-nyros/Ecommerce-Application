import React, { useState , useCallback} from "react";
import  Count  from "./Count";
import  Buttons  from "./Buttons";
export const Homes = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);
  const incrementSalary = useCallback(()=>{
    setSalary(salary + 1);
  },[salary])
  // const incrementAge = () => {
  //   setAge(age + 1);
  // }
  // const incrementSalary = ()=>{
  //   setSalary(salary + 1);
  // }
  return (
    <div>
      <div>
        <h3>
          <b>Some Advance Concepts of Reactjs</b>
        </h3>
      </div>
      <div>
        <Count title={"age"} myProps={age} />
        <Buttons click={incrementAge} myProps='age'/>
        <Count title={"salary"} myProps={salary} />
        <Buttons click={incrementSalary} myProps='salary'/>
      </div>
      <h4><b>Note :- </b> we are using useCallback and React.Memo here</h4>
    </div>
  );
};
