import { Home } from "./Components/Home";
import { Details } from "./Components/Order Details/Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart } from "./Components/Shopping Cart/Cart";
import { Checkout } from "./Components/Checkout section/Checkout";
import { Counter1 } from "./Components/Practice/Counter1";
import Counter from "./Components/Practice/Counter";
import { Prc1 } from "./Components/Practice/Prc1";
import { Homes } from "./Components/Practice/AdvanceConcept/Homes";
import { TodosMain } from "./Components/Practice/AdvanceConcept/TodosMain";
import Wishlist from "./Components/Wishlist/Wishlist";
import "./App.css";
function App() {
  return (
    <div className="text-center">
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/details:itemId" element={<Details/>} />
      {/* <Route exact path="/cart:itemId" element={<Cart/>} /> */}
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/checkout" element={<Checkout/>} />
      <Route exact path="/wishlist" element={<Wishlist/>} />




      <Route exact path="/counter" element={<Counter/>} />
      <Route exact path="/counter1" element={<Counter1/>} />
      <Route exact path="/prc1" element={<Prc1/>} />
      <Route exact path="/home" element={<Homes/>} />
      <Route exact path="/todo" element={<TodosMain/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
