import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
function Cart() {
    const DUMMY_CARTLIST = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal>
            {DUMMY_CARTLIST}
        </Modal>
    );
}

export default Cart;