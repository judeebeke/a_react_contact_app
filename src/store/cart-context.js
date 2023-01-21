import React from 'react';

const CartContext = React.createContext({
    name: "",
    number: "",
    description: "",
    favorite: 0,
})

export default CartContext;
