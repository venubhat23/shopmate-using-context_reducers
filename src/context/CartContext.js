import { createContext,useContext,useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
const initialState={
    cartList:[],
    total:0,
}

const CartContext=createContext(initialState);

export const CartProvider=({children})=>{

    const [state, dispatch] = useReducer(cartReducer,initialState)
    
    const addToCart=(product)=>{
      const updatedCartList = state.cartList.concat(product)
      updateTotal(updatedCartList);
      dispatch({
        type: "ADD_TO_CART" ,
        payload:{
            abc:updatedCartList
        }
      })
    }

    const removeFromCart=(product)=>{
        const updatedCartList=state.cartList.filter(current=>current.id !== product.id)
        updateTotal(updatedCartList);

        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                abc:updatedCartList
            }
        })
    }

    const updateTotal=(products)=>{
        let total=0
        products.forEach(prod=>total=total+prod.price)
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{

                total:total
            }
        })
    }

    const value={
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart,
    }
    return (
        <CartContext.Provider value={value}>

{children}
        </CartContext.Provider>


    )
}

export const useCart=()=>{
    const context=useContext(CartContext);
    return context;
}

