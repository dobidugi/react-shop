import React from "react";
import classes from "./CartItem.module.css";
import ItemAmountButton from "./ItemAmountButton";
function CartItem(props) {
    const { name, amount, price } = props;
    return (
        <li className={`${props.className} ${classes.item}`}>
            <div>
                <div className={classes.na}>
                    <span>{name}</span>
                    <span className={classes.amount}>{`x${amount}`}</span>
                </div>
                <span className={classes.price}>{`$${price}`}</span>
            </div>
            <ItemAmountButton />
            
        </li>
    );
}

export default CartItem;