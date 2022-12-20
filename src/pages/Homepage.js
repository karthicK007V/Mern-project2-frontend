import React, { useContext} from 'react';
import Navbar from '../components/navbar';

import Card from "../components/card"

import { Cartin } from '../context/context';

const Homepage = () => {

    const {state} = useContext(Cartin)
    // console.log(state.product);
  

    return (<>
     <Navbar/>
        
        
         { <div className=''>
        <div className='row m-5'>
           
            {state.product.map((prod)=>{
                return <div className='col-md-3' key={prod._id}>
                    <Card product={prod}/>
                </div>

            })}
           </div>
        </div> }
        </>
    );
}

export default Homepage;
