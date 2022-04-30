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
        setItems( items.filter(item => item.id !== id));
    };

    const addAmountToCartHandler = (id) => {
        const newItems = items.map(item => {
            if(item.id === id) {
                item.amount = (+item.amount) + 1;
            }
            return item;
        });
        setItems(newItems);
    };

    const subAmountToCartHandler = (id) => {
        let amount = 0;
        const newItems = items.map(item => {
            if(item.id === id) {
                item.amount = (+item.amount) - 1;
                amount = item.amount;
            }
            return item;
        });
        if(amount <= 0) removeItemToCartHandler(id);
        else setItems(newItems);
    };
    
    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        addAmount: addAmountToCartHandler,
        subAmount: subAmountToCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;