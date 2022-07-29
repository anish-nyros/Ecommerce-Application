import React from 'react'

 function Buttons (props) {
    console.log("inside Buttons page ",props.myProps);
  return (
    <div>
        <button onClick={props.click}> <b>Increment {props.myProps}</b></button>
    </div>
  )
}
export default React.memo(Buttons);