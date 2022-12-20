export const cartReducer=(state,action)=>{
switch (action.type) {
    case "GET_DATA":
        return  {...state,product:action.payload.data}
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload.product,qty:1,color:action.payload.color,storage:action.payload.storage}]}

        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter((pro)=>pro._id!==action.payload._id)}
        case "QTY_CHANGE":{
            return {...state,cart:state.cart.filter((c)=>c.id===action.payload.id?c.qty=action.payload.qty:c.qty)}
        }
        // case "COLOR_CHANGE":{
        //     return {...state,cart:state.cart.filter((c)=>c.id===action.payload.id?c.color=action.payload.color:c.color)}
        // }  
        case "CART_EMPTY":
            return {...state,cart:[]}
  
        
        default:
            return  {...state}
}

}
// export const cardReducer=(state,action)=>{
//     switch(action.type){
//         case "ADD_TO_CART":
//             return {...state,cart:[...state.cart,{...action.payload,qty:1,color: [state.color]}]}

//         case "REMOVE_FROM_CART":
//             return {...state,cart:state.cart.filter((pro)=>pro._id!==action.payload._id)}
//             default:
//                 return state


//     }
// }