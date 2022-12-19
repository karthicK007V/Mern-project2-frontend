import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Cartin } from '../context/context';

import {  useNavigate } from 'react-router-dom';


import useRazorpay from "react-razorpay";





   

const Cart = () => {
  const { state: { cart  }, dispatch,storage ,total, settotal } = useContext(Cartin);
  // const [total, settotal] = useState()


  useEffect(() => {
    const tot = cart.reduce((acc, cur) => acc + (cur.price+storage*25)*cur.qty, 0)
    settotal(tot)

  }, [cart,settotal,storage])

// console.log(cart);

const Razorpay = useRazorpay();
const navigate=useNavigate();
const check=(e)=>{
  const options = {
    key: "rzp_test_5Pc7XAWwFwhOM8",
    amount:total*100+10000,
    currency: "INR",
    name: "iPhone Store Clone",
    description: "Test Transaction",
    image: "https://wallpaperaccess.com/full/213588.jpg",
  
    handler: (res) => {
      console.log(res);
      alert(`Payment SuccessFully And Payment ID:${res.razorpay_payment_id}`)
      navigate("/cart/checkout")
    },
    prefill: {
      name: "karthick",
      email: "karthi.16v@gmail.com",
      contact: "9994729177",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "##181616",
    }, ignoreWarnings: [/Failed to parse source map/],
  };

  const rzpay = new Razorpay(options);
  rzpay.open();



}








  return (
    <>
      <Navbar />

      <div className="containe">
        <div className="bill">
          <div>

            <table class="table" >
              <thead >
                <tr className=''>
                  <th scope="col" className=''>No</th>
                  <th scope="col" className=''>Image</th>
                  <th scope="col" className=''>Name</th>
                  <th scope="col" className=''>Price(₹)</th>
                  <th scope="col" className=''>Storage</th>
                  <th scope="col" className=''>Qty</th>
                  <th scope="col" className='' >Color</th>
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
                      <td>
                        <form onChange={(e)=>dispatch({
    type:"QTY_CHANGE",
    payload:{
      _id:product._id,
      qty:e.target.value
    }
  })}>
  <select class="form-select" aria-label="Default select example" >
 
  <option value="1" selected>1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select></form></td>
                      <td>{product.color}</td>
                      <td ><button onClick={() => dispatch({
                        type: "REMOVE_FROM_CART", payload: product
                      })}><AiFillDelete style={{ "color": "red" }} /></button></td>
                    </tr>

                  </tbody>

                })
              }

            </table>



          </div>
        </div>
        <div className="summary">
          <h1>Order</h1>
          
          <div className="summary-item fs-2"><span className="text">Subtotal</span><span className="price">:₹ {total}</span></div>
          <br></br>

          <div className="summary-item fs-2"><span className="text">Discount</span><span className="price">:₹ 50</span></div>
          <br></br>

          <div className="summary-item fs-2"><span className="text">Shipping</span><span className="price">:₹ 150</span></div>
          <br></br>

          <div className="summary-item fs-1"><span className="text">Total</span><span className="price"> :₹ {100 + total}</span></div>
          <br></br>

          <br></br>
          {/* <Link to="/cart/checkout">  */}
           <button type="button fs-2" className="btn btn-primary btn-lg btn-block" onClick={(e)=>{check()}}>Checkout</button>
           {/* </Link> */}
        </div>

      </div>

    </>

  );
}

export default Cart;
