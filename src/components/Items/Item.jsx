import React from "react";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";
function Item(props) {
    const { name, description, price } = props; 
    const dPrice = `$${price}`;
    return (
        <li className={classes.item}>
            <div>
                <h1 className={classes.name}>{name}</h1>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{dPrice}</p>
            </div>
            <div><ItemForm /></div>    
        </li>
    );
}

export default Item;