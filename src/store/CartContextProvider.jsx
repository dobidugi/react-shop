import React, { useState } from "react";
import CartContext from "./cart-context";

function CartContextProvider(props) {
    const [items, setItems] = useState([]);
    
    const addItemToCartHandler = (item) => {
        const findItem = items.find(oldItem => item.id === oldItem.id); // 중복체크
        if(findItem) {
            const newItems = items.map(oldItem => {
                if(item.id === oldItem.id) {
                    oldItem.amount = (+oldItem.amount) + +item.amount;
                }
                return oldItem;
            });
            setItems(newItems);
        } else {
            setItems(items.concat(item));
        }
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