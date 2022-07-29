import React,{useState , useReducer} from 'react'

function UseReducer (props) {
    // const [count , setCount] = useState(0);
    const initialState = 0;
    const reducer = (state, action) => {
      switch (action){
        case 'increment' :
          state = state + 1
        return state;
        case 'decrement':
          state = state - 1
          return state;
        case 'reset':
          state = 0
        default :
          return state;
      }
    }
    const [item , dispatch] = useReducer(reducer , initialState)
  return [item , dispatch]
}
export default UseReducer;