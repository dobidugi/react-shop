import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (id) => {},
    removeItem: (id) => {}
});


export default CartContext;