import React,{useContext} from 'react';
import { BsApple } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { Cartin } from '../context/context';

const Navbar = () => {
  const {state,names} = useContext(Cartin)
    return (
        <div>
          
            
            <nav className="navbar navbar-dark bg-dark p-3 ">
  <div className="container-fluid ">
    <a className="navbar-brand fs-1 " href='bdg'><BsApple/></a>
    <div className="d-flex fs-1  " role="search">
   <Link to="/adminlogin"> <button className="btn btn-outline-info" type="button">Admin</button></Link>
   <Link to="/home"><button className="btn btn-outline-primary" type="button">Home</button></Link>
   {/* <button className="btn btn-outline-success" type="button">Cart {state.cart.length}</button> */}
   <Link to="/cart"><button type="button" className="btn btn-outline-primary position-relative">
  Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style={{"color":"white"}} type="button"> {state.cart.length} <span class="visually-hidden">unread messages</span></span>
</button></Link>
    
   <Link to='/'> <button className="btn btn-outline-info ms-2" type="button">{names} <span style={{"color":"red"}}><AiOutlineLogout/></span></button></Link>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
