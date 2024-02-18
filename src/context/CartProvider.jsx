import {createContext, useState} from 'react';

const Cartontext = createContext({});

export const CartProvider = ({children}) => {
    const [cart, setCartItems] = useState([]);

    return(
        <Cartontext.Provider value={{cart, setCartItems}}>
            {children}
        </Cartontext.Provider>
    )
};

export default Cartontext;