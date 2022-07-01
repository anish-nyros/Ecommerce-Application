import { Home } from "./Components/Home";
import { Details } from "./Components/Order Details/Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart } from "./Components/Shopping Cart/Cart";
import "./App.css";
function App() {
  return (
    <div className="text-center">
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/details:itemId" element={<Details/>} />
      <Route exact path="/cart:itemId" element={<Cart/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
