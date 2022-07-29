import React from 'react'

 const TodosButton = ({click , count}) => {
    console.log("inside TodosButton for ",count);
  return (
    <div>
        <button onClick={click}><b>{count}</b></button>
    </div>
  )
}
export default  React.memo(TodosButton);