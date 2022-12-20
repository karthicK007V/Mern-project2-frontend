import React, { createContext,  useReducer,useState,useEffect } from "react";
import { cartReducer } from "./reducer";
import axios from "axios";


export const Cartin=createContext();





const Context = ({children}) => {
    
    const[storage,setstorage]=useState("64")
    const [names,setname]=useState('')
    const [total, settotal] = useState()
    const [state, dispatch] = useReducer(cartReducer, {product:[],cart:[]});
        useEffect(()=>{
        const getproducts=async()=>{
           const res= await axios.get("https://iphone-store-clone.onrender.com/api/getproduct");
       
        dispatch({
            type: "GET_DATA",
            payload:{
                data:res.data
            }
        })

        }
        getproducts()
    },[])
   
    return (
        <Cartin.Provider value={{state, dispatch,storage,setstorage,total,settotal,names,setname}}>{children}
            
        </Cartin.Provider>
    );
}

export default Context;
