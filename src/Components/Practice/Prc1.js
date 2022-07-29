import React ,{ useState } from 'react'
import { Prc2 } from './Prc2';
export const Prc1 = () => {
    const [counter , setCounter] = useState(0)
    const [title,setTitle] = useState("title unclicked");
  return (
    <div>
        <h1>Title : {title}</h1>
        <h3>Counter : {counter}</h3>
        <Prc2 counter ={counter} title={title} setCounter={setCounter} setTitle={setTitle}/>
    </div>
  )
}
