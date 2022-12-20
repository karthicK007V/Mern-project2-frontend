
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/Homepage";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Signup from "./pages/signup";

import Adminlogin from "./pages/adminlogin";
import Products from "./pages/products";
import Users from "./pages/users";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/users" element={<Users/>}/>
        
        <Route path="/productlist" element={<Products/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/cart/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  
    
    </>
   
  );
}

export default App;
