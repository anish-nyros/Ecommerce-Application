import React,{useState , useEffect} from 'react'

function CustomCartHook(cartdata) {
    // const newCart = [];
    const [cartData, setCartData] = useState(
        JSON.parse(localStorage.getItem("Items"))
      );
      const [newCart , setNewCart] = useState([...cartdata]);
    
    const increment = (item,val)=>{
        const selectedItem = newCart.indexOf(item)
        newCart[selectedItem].quantity += val;
        if( newCart[selectedItem].quantity <= 0){
               newCart[selectedItem].quantity = 1;
             }
             setCartData([...newCart]);
    }
    const decrement = (item,val)=>{
        const selectedItem = newCart.indexOf(item)
        newCart[selectedItem].quantity += val;
        if( newCart[selectedItem].quantity <= 0){
            newCart[selectedItem].quantity = 1;
          }
            setCartData([...newCart]);  
    }
    const remove = (id)=>{
        const rem = newCart.filter((item) => item.id !== id);
        console.log("printing rem inside CustomHook ", rem);
        setCartData([...rem]);
    }
    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(cartData));
        console.log("printing cart data from customHook ", cartData);
      },[cartData])
  return [increment , decrement , remove, newCart];
}

export default CustomCartHook