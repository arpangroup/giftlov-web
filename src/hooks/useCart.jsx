import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "./useAuth";

const useCart = () => {
    // return useContext(AuthContext);


    const {cart, setCartItem} = useContext(AuthContext)

    const cartItems = cart.cartItems;

    const setCart = (cartItem) => {
        const newItems = [...cart.cartItems, cartItem];
        const totalAmount = newItems.map(it => it.toValue).reduce((a,b) => a+b, 0);
        setCartItem(prev =>{
            return {
                ...prev,
                cartItems: newItems,
                toralItem: newItems.length,
                totalCartAmount: totalAmount
            }
        });
        console.log("CART: ", cart)
    };

    const resetCart = () => {
        setCartItem({
                toralItem: 0,
                totalCartAmount: 0,
                cartItems: []
        });
        console.log("CART: ", cart)
    };

    const isItemExistInCart = (cartItem) => {
        const isItemExist = cart.cartItems.map(it=>it.id).includes(cartItem.id);
        return isItemExist;
    };
    
    return {cart, setCart, cartItems, isItemExistInCart, resetCart};


   
}

export default useCart;