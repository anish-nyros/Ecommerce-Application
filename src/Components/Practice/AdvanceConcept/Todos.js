import React from "react";

 const Todos = ({ addtodo, todo }) => {
  console.log("inside Todos");
  return (
    <div>
      <h3>My Todo's List are :-</h3>
      {todo.map((item, index) => {
        return (
        <li key={index}>{item}</li>
        )})}
        <br/>
        <div>
            <button onClick={addtodo}><b>Add Todos</b></button>
        </div>
    </div>
  );
};
export default React.memo(Todos);
// export default Todos;