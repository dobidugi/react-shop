import React, { useRef, useState } from "react";
import LabelInput from "../UI/LabelInput";
import classes from "./ItemForm.module.css";

function ItemForm(props) {
    const { onAddItem } = props;
    const minAmount = 1;
    const maxAmount = 99;
    const labelInputRef = useRef(null);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const amount = labelInputRef.current.value;
        onAddItem(amount);
    };
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <LabelInput label={"Amount"}
                ref={labelInputRef}
                input={{
                    id: "amount",
                    type: "number",
                    min: minAmount,
                    max: maxAmount,
                    defaultValue: "1",
                    step: "1"
                }}
            />
            
            <button>+Add</button>
        </form>
    );
}

export default ItemForm;