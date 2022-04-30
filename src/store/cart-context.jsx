import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    addAmount: (id) => {},
    subAmount: (id) => {}
});


export default CartContext;