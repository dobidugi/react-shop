import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import ItemAmountButton from "./ItemAmountButton";
import CartContext from "../../store/cart-context";
function CartItem(props) {
    const { name, amount, price, id } = props;
    const ctx = useContext(CartContext);

    const onAddAmount = () => {
        ctx.addAmount(id);
    };

    const onSubAmount = () => {
        ctx.subAmount(id);
    };
    return (
        <li className={`${props.className} ${classes.item}`}>
            <div>
                <div className={classes.na}>
                    <span>{name}</span>
                    <span className={classes.amount}>{`x${amount}`}</span>
                </div>
                <span className={classes.price}>{`$${price}`}</span>
            </div>
            <ItemAmountButton 
                onAdd={onAddAmount}
                onSub={onSubAmount}
            />
        </li>
    );
}

export default CartItem;