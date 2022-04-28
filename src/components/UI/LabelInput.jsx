import React from "react";

function LabelInput(props) {
    const { label, input } = props;
    return (
        <div>
            <label htmlFor={input.id}>{label}</label>
            <input {...input}/>
        </div>
    );
}

export default LabelInput;