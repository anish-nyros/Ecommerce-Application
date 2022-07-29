import React from 'react'

function Count (props){
    console.log("printing title ",props.title," and ",props.myProps," in Count page");
  return (
    <div>
        <h1>{props.title} : {props.myProps}</h1>
    </div>
  )
}
export default React.memo(Count);