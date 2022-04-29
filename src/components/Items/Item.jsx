import React, { useContext } from "react";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";
import CartContext from "../../store/cart-context";
function Item(props) {
    const { id, name, description, price } = props; 
    const dPrice = `$${price}`;
    const ctx = useContext(CartContext);
    const onAddItemToCart = (amount) => {
        ctx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    };


    return (
        <li className={classes.item}>
            <div>
                <h1 className={classes.name}>{name}</h1>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{dPrice}</p>
            </div>
            <div><ItemForm onAddItem={onAddItemToCart}/></div>    
        </li>
    );
}

export default Item;