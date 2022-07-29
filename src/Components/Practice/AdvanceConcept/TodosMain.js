import React,{useState , useCallback, useMemo, useRef, useEffect} from 'react'
import TodosButton  from './TodosButton';
import Todos  from './Todos';
export const TodosMain = () => {
    const [todos , setTodos] = useState(["first Todo","second Todo","third Todo","fourth Todo"]);
    const [counter , setCounter] = useState(0);
    const [counter2 , setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0)
    const inputRef = useRef()
    const timerRef = useRef()

    const addTodo = useCallback(() => {
        setTodos((t)=>[...t,"new Todo"])
    },[todos]);
    const incrementCounter = ()=>{
        setCounter(counter+1);
    };
    // const addTodo = () => {
    //     setTodos((t)=>[...t,"new Todo"])
    // };
    // const incrementCounter = ()=>{
    //     setCounter(counter+1);
    // };
    const IncrementCounter2 = ()=>{
        setCounter2(counter2+1);
    };

    const isEven = ()=>{
        let i=0;
        while( i < 2000000000){
            i++;
        }
        return counter2 %2 ===0;
    };

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    useEffect(()=>{
        timerRef.current = setInterval(()=>{
            setCounter3((prevcount)=> prevcount + 1)
            console.log("isnide useEffect ");
        },2000)
    },[])

    const resetCounter3 = ()=>{
       clearInterval(timerRef.current)
       setCounter3(0)
    }

  return (
    <div>
        <br/><br/>
        <Todos addtodo={addTodo} todo={todos}/>
        <br/><br/>
        <div>
            <h1>Counter1 : {counter}</h1>
        </div>
        <TodosButton click={incrementCounter} count="Increment Counter"/>
        <br/><br/>
        <div>
            <h1>Counter2 : {counter2}</h1>
            <h2>Counter2 is :
            {
                isEven ? "Even" : "Odd"
            }
            </h2>
            <TodosButton click={IncrementCounter2} count="Increment Counter2"/>
        </div>
        <br/><br/>
        <div>
            <input ref={inputRef} placeholder="searching...."/>
        </div>
        <br/><br/>
        <div>
            <h1>Counter3 : {counter3}</h1>
            <button onClick={resetCounter3}>reset counter3</button>
        </div>
    </div>
  )
}
