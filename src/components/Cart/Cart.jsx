import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
function Cart(props) {
    const { onClose } = props;
    const ctx = useContext(CartContext);
    let price = 0;
    ctx.items.forEach(item => price += (item.amount * item.price));
    const newCartList = ctx.items.map(item => <li className={classes["cart-item"]} key={item.id}>{item.name}</li>);
    return (
        <Modal onClose={onClose} className={classes["modal__inner"]}>
            <ul className={classes["cart-list"]}>
                {newCartList}
            </ul>
            <div className={classes["total-price"]}>
                <h1>Total Price: </h1>
                <h1>{price}</h1>
            </div>
            <div className={classes.button}>
                <button onClick={onClose}>CLOSE</button>
                <button>ORDER</button>
            </div>
        </Modal>
    );
}

export default Cart;