import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const ShopContext = createContext('null')
const getDefaultCart =()=>{
    let cart = {}
    for (let index = 0; index < all_product.length +1; index++) {
      cart[index] = 0
        
    }

    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart());

    console.log(cartItems)

    const addTOCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        toast.success('added to cart')
        console.log(cartItems);
    }

    const removefromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
        toast.success('removed from cart')
        console.log(removefromCart);
    }
    
    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
        if(cartItems[item]>0)
        {
        let itemInfo = all_product.find((product)=>product.id === Number(item))
         totalAmount += itemInfo.new_price * cartItems[item]
        }
        }
        return totalAmount
    }

    const getTotalCartitems =()=>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
            totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    




    const contextValue = {all_product,cartItems,addTOCart,removefromCart,getTotalCartAmount,getTotalCartAmount,getTotalCartitems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider