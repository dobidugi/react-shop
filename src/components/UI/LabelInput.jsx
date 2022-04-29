import React from "react";


function LabelInput(props, ref) {
    const { label, input } = props;
    return (
        <div>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} {...input}/>
        </div>
    );
}

export default React.forwardRef(LabelInput);