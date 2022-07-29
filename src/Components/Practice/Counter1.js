import React from 'react'
import UseReducer from './UseReducer';
export const Counter1 = () => {

const [item , dispatch] = UseReducer();
  return (
    <div><br/>
        <h1><b>Counter 1 :{item}</b></h1><br/>
        <div>
            <button onClick={()=>{ dispatch('increment')}}><b>Increment</b></button><br/>
            <button onClick={()=>{ dispatch('decrement')}}><b>Decrement</b></button><br/>
            <button onClick={()=>{ dispatch('reset')}}><b>SetZero</b></button>
        </div>
    </div>
  )
}

