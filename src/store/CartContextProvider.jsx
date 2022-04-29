import React, { useState } from "react";
import CartContext from "./cart-context";

function CartContextProvider(props) {
    const [items, setItems] = useState([]);
    const addItemToCartHandler = (item) => {
        setItems(items.concat(item));
    };

    const removeItemToCartHandler = (id) => {
        setItems( items.map(item => item.id === id));
    };
    
    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;