import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
function Cart(props) {
    const { onClose } = props;
    const ctx = useContext(CartContext);
    let price = 0;
    ctx.items.forEach(item => price += (item.amount * item.price));
    const newCartList = ctx.items.map(item => 
        <CartItem 
            className={classes["cart-item"]} 
            key={item.id} 
            name={item.name}
            amount={item.amount}
            price={item.price}
        >
        </CartItem>
    );
    return (
        <Modal onClose={onClose} className={classes["modal__inner"]}>
            <ul className={classes["cart-list"]}>
                {newCartList}
            </ul>
            <div className={classes["total-price"]}>
                <h1>Total Price: </h1>
                <h1>{`$${price.toFixed(2)}`}</h1>
            </div>
            <div className={classes.button}>
                <button className={classes["click-button"]} onClick={onClose}>CLOSE</button>
                <button className={classes["click-button"]} >ORDER</button>
            </div>
        </Modal>
    );
}

export default Cart;