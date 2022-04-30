import React from "react";
import classes from "./ItemAmountButton.module.css";
function ItemAmountButton(props) {
    return (
        <div>
            <button onClick={props.onSub} className={classes.button}>-</button>
            <button onClick={props.onAdd} className={classes.button}>+</button>
        </div>
    );
}

export default ItemAmountButton;