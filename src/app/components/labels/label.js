import React from "react";
import "./label.scss";

const Label = (props) => {
    

    return (
        <div className="label" style={{backgroundColor: props.color}}>
            <h2>{props.text}</h2>
        </div>
    )
};

export default Label;
