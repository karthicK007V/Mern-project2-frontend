import React, { useState } from 'react';
import axios from "axios"
import {  Link, useNavigate } from 'react-router-dom';
import { BsApple } from 'react-icons/bs';




const Signup = () => {
  const [error,seterror]=useState()
  const navigate=useNavigate()
  const [formdata,setformdata]=useState({
    name:"",
    email:"",
    password:""
  })
 

  const HandelSubmit=async(e)=>{
    e.preventDefault();
   
try {
  


  const res=await axios.post("https://iphone-store-clone.onrender.com/api/signup",{...formdata});
  // console.log(res);
  
  const message=res.data.message;
  if(res.data.success){
   seterror(message)
  }else{
    alert(`${message}`)
   
    navigate("/")
  }
 
  
} catch (error) {
  console.log(error);
  
}
   

    

  }
  
  
  
    return (
        <>

<section className="vh-100" style={{"backgroundColor":"#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{"borderRadius":" 25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                
              <h3><span className="badge  text-bg-danger">{error}</span></h3>
              
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><span className="h1 fw-bold mt-5 p-5"> <BsApple/> </span>
Sign Up</p>

                <form className="mx-1 mx-md-4" onSubmit={(e)=>{HandelSubmit(e)}} >

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="name" value={formdata.name}
                      onChange={(e)=>setformdata({...formdata,name:e.target.value})} required />
                      <label className="form-label" htmlFor="form3Example1c" 
                      >Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control"  name="email" value={formdata.email} 
                      onChange={(e)=>setformdata({...formdata,email:e.target.value})} required/>
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name='password' value={formdata.password}
                       onChange={(e)=>setformdata({...formdata,password:e.target.value})} required/>
                      <label className="form-label" htmlFor="form3Example4c" >Password</label>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label"  htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                  

                </form>
                <Link to="/">
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Login</button>
                  </div>
                  </Link>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                < input type="image" img src={"https://media.istockphoto.com/id/511484970/photo/apple-store-on-3rd-street-promenade-in-santa-monica.jpg?s=612x612&w=0&k=20&c=OvzFykBPYoNaAir29ZzfDeRzeWIlhrF6_cJMUy_5_eI="}
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </>
    );
}

export default Signup;
