import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
    return (
        <button {...props} className={classes.button}>
            <span className={classes.icon}><AddShoppingCartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.count}>3</span>
        </button>
    );
}

export default HeaderCartButton;