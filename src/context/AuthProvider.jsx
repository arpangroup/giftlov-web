import {createContext, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [cart, setCartItem] = useState({
        toralItem: 0,
        totalCartAmount: 0,
        cartItems: []
    });

    return(
        <AuthContext.Provider value={{auth, setAuth, cart, setCartItem}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;