import React from "react";
import classes from "./ItemAmountButton.module.css";
function ItemAmountButton() {
    return (
        <div>
            <button className={classes.button}>-</button>
            <button className={classes.button}>+</button>
        </div>
    );
}

export default ItemAmountButton;