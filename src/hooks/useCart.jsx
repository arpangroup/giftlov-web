import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "./useAuth";

const useCart = () => {
    // return useContext(AuthContext);


    const {cart, setCartItem} = useContext(AuthContext)

    const cartItems = () => {
       return  cart.cartItems;
    };

    const setCart = (cartItem) => {
        setCartItem(prev =>{
            return {
                ...prev,
                cartItems: [...prev.cartItems, cartItem]
            }
        });
        console.log("CART: ", cart)
    };

    const isItemExistInCart = (cartItem) => {
        const isItemExist = cart.cartItems.map(it=>it.id).includes(cartItem.id);
        return isItemExist;
    };
    
    return {cart, setCart, cartItems, isItemExistInCart};


   
}

export default useCart;