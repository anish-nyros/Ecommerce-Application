import React,{useState} from 'react'

function CustomHooks(initialValues) {
    const [count , setCount] = useState(initialValues);
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0);
    }
  return [count , increment , decrement , reset];
}
export default CustomHooks;