import React from 'react';
import { useContext } from 'react';
import { Cartin } from '../context/context';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const Checkout = () => {
    const navigate=useNavigate();
    const { state: { cart  },storage,total, dispatch} = useContext(Cartin);
    console.log(cart);
    const con=()=>{
        alert("Contionus Shopping")
        navigate("/home")
        // window.location.reload(true)
        dispatch({
          type:"CART_EMPTY"
        })


    }

    return (
        <>
        <Navbar/>
             <div className="container">
          

            <table class="table" >
              <thead >
                <tr className=''>
                  <th scope="col" className=''>No</th>
                  <th scope="col" className=''>Image</th>
                  <th scope="col" className=''>Name</th>
                  <th scope="col" className=''>Price(₹)</th>
                  <th scope="col" className=''>Storage</th>
               
                  <th scope="col" className='' >Color</th>
                  <th scope="col" className='' >Status</th>
                </tr>
              </thead>{
                cart.map((product, i) => {
                  return <tbody className='shadow-lg p-5 m-5 bg-body rounded' key={product._id}>
                    <tr >
                      <th scope="row">{i + 1}.</th>
                      <td > <img src={product.image} alt="Nice" style={{ "height": "100px" }} /></td>
                      <td>{product.name}</td>
                      <td>{product.price+(storage*25)}</td>
                      <td>{product.storage}GB</td>
                      
  
                      <td>{product.color}</td>
                      <td style={{"color":"green"}}> ORDER PLACED </td>
                     
                    </tr>

                  </tbody>

                })
              }

            </table >
            <div className='container last shadow-lg p-3 bg-body rounded'>
                <tbody >Items : {cart.length}</tbody>
                <tbody>Total :₹   {total}</tbody>
               
                </div>
                <div className='success text-center mt-5'>
                    <h1 style={{"color":"green"}}>Your Order SuccessFully Placed</h1>
                    <button className='btn btn-primary m-3'  onClick={()=>con()}>Contionus Shopping</button>

                </div>
               
            </div>



          
        </>
            
     
    );
}

export default Checkout;
