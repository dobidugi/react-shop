import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

function HeaderCartButton(props) {
    const ctx = useContext(CartContext);
    const itemCount = ctx.items.length;
    return (
        <button {...props} className={classes.button}>
            <span className={classes.icon}><AddShoppingCartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.count}>{itemCount}</span>
        </button>
    );
}

export default HeaderCartButton;