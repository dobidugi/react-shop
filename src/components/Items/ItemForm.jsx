import React from "react";
import LabelInput from "../UI/LabelInput";
import classes from "./ItemForm.module.css";

function ItemForm() {
    return (
        <form className={classes.form}>
            <LabelInput label={"Amount"}
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "99",
                    defaultValue: "1",
                    step: "1"
                }}
            />
            <button>+Add</button>
        </form>
    );
}

export default ItemForm;