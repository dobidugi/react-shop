import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
function Cart() {
    const DUMY_CARTLIST = [
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 }
    ];
    let price = 0;
    DUMY_CARTLIST.forEach(item => price += (item.amount * item.price));
    const newCartList = DUMY_CARTLIST.map(item => <li className={classes["cart-item"]} key={item.id}>{item.name}</li>);
    return (
        <Modal className={classes["modal__inner"]}>
            <ul className={classes["cart-list"]}>
                {newCartList}
            </ul>
            <div className={classes["total-price"]}>
                <h1>Total Price: </h1>
                <h1>{price}</h1>
            </div>
            <div className={classes.button}>
                <button>CLOSE</button>
                <button>ORDER</button>
            </div>
        </Modal>
    );
}

export default Cart;