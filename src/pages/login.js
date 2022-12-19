import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { BsApple } from 'react-icons/bs';
import { Cartin } from '../context/context';


const Login = () => {
  const navigate=useNavigate()
  const [formdata,setformdata]=useState({
    email:"",
    password:""
  })

  const [error,seterror]=useState()
  // const [name,setname]=useState('')
  const {setname}=useContext(Cartin)

  const HandelSubmit=async(e)=>{
    e.preventDefault();
    // console.log(formdata);
    try {
    


      const res= await axios.post("https://iphone-store-clone.onrender.com/api/signin",{...formdata});
      console.log(res);
      const message=res.data.message;
      if(res.data.token){
       
      setname(res.data.name)
       navigate("/home")
   
      }else{
     
        seterror(message)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  



  }
  
    return (
        <>
        <section className="vh-100 mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">

        <div className="px-5 ms-xl-4 mt-5">
        <span className="h1 fw-bold mt-5 p-5"> <BsApple/> </span>
       
         
          <span className="h1 fw-bold mt-5 p-5"> IPHONE STORE</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3><span className="badge  text-bg-danger">{error}</span></h3>


        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{"width": "23rem"}}    onSubmit={(e)=>HandelSubmit(e)}>
       

            <h3 className="fw-normal mb-3 pb-3" >Log in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="form2Example18" className="form-control form-control-lg"  name="email"
                  value={formdata.email}
                  onChange={(e)=>setformdata({...formdata,email:e.target.value})}  required/>
              <label className="form-label"  >Email </label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" name="password"
                   value={formdata.password}
                   onChange={(e)=>setformdata({...formdata,password:e.target.value})} required />
              <label className="form-label"  >Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
            </div>

           
            <p>Don't have an account? <Link to="/signup" href="#!" className="link-info">Register here</Link></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <input type="image" img src={"https://media.istockphoto.com/id/458975901/photo/apple-store-in-new-york-city.jpg?s=612x612&w=0&k=20&c=BFeXaP_w6TtOdTsT1COL96t-XNPOHYgkEJw-IvKAGx4="}
          alt="Login image" className="w-100 vh-100" />
      </div>
    </div>
  </div>
</section>
    
        </>
    );
}

export default Login;

