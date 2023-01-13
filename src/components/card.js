
import React, { useContext, useState } from 'react';
import { Cartin } from '../context/context';


const Card = ({product}) => {

  

 const [color,setcolor]=useState("red")
 const[storage,setstorage]=useState("64")
 const[price,setprice]=useState()
    const {state,dispatch}=useContext(Cartin)
    // console.log(state.product);
    // console.log(state.cart);
    // console.log(state.cart.color);
    // console.log(state.cart);

  
    
   
 
    
    return (
        <div className='shadow-lg p-3 mb-5 bg-body rounded '>
            
            <div className="card" style={{"width": "18rem"}}>
  <img src={product.image} className="card-img-top ms-5" alt="..." style={{"height":"30vh","width":"28vh"}} />
  <div className="card-body">
    <h3 className="card-title">{product.name}</h3>
    <form onChange={(e)=>setprice(e.target.value)}><h3 className="card-title">RS : ₹ {product.price+storage*25}</h3></form> 
   
    <p className="card-text"></p>
    <div className='color'>
    <h3 className="card-title">Storage:</h3>

    <form onChange={(e)=>setstorage(e.target.value)}>
    <div className="form-check form-check-inline " >
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="64"   />
  <label className="form-check-label  ms-1" >64GB</label>
</div>
<div className="form-check form-check-inline ms-5">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="128"/>
  <label className="form-check-label" >128GB</label>
</div>
<div className="form-check form-check-inline ">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="256"/>
  <label className="form-check-label" >256GB</label>
</div><div className="form-check form-check-inline storage ">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="512" />
  <label className="form-check-label" >512GB</label>
</div>
</form>
<h3 className="card-title">Color:</h3>
<form onChange={(e)=>setcolor(e.target.value)}>
    <div className="form-check form-check-inline " >
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Red"  />
  <label className="form-check-label  ms-1" >Red</label>
</div>
<div className="form-check form-check-inline ms-5">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="White"/>
  <label className="form-check-label" >White</label>
</div>
<div className="form-check form-check-inline ">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Black"/>
  <label className="form-check-label" >Black</label>
</div><div className="form-check form-check-inline purple">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Purple" />
  <label className="form-check-label" >Purple</label>
</div>
</form>
</div>
 
    {/* // cart.includes(product)?( <button className='btn btn-danger  fs-5 mt-4  add' style={{"marginLeft":"60px"}}  onClick={()=>{setcart(cart.filter(e=>e.name!== product.name))}}> Remove From Cart</button>):
    // (  <button className='btn btn-primary  fs-5 mt-4   add' style={{"marginLeft":"100px"}} onClick={()=>{setcart([product,...cart])}}> Add To Cart</button>
    // ) */}
    {/* <button className='btn btn-primary  fs-5 mt-4   add' style={{"marginLeft":"100px"}} > Add To Cart</button> */}

    {state.cart.some((pro)=>pro._id===product._id)?( <button className='btn btn-danger  fs-5 mt-4  add' style={{"marginLeft":"60px"}}  onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:product
})}> Remove From Cart</button>):(<button className='btn btn-primary  fs-5 mt-4  add' style={{"marginLeft":"100px"}}  onClick={(e)=>dispatch({type:"ADD_TO_CART",payload:{
  product:product,
  color:color,storage:storage,price:price
 
} })}> Add To Cart</button>)}
{/* <button className='btn btn-danger  fs-5 mt-4  add' style={{"marginLeft":"60px"}}  onClick={()=>dispatch({type:"ADD_TO_CART",payload:product
    })}> Add To Cart</button> */}
   
   
 
 
  </div>
</div>
            
        </div>
    );
}

export default Card;
