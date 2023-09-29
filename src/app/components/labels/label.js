import React from "react";
import "./label.scss";

const Label = (props) => {
    

    return (
        <div className="label" >
            <h2>{props.text}</h2>
        </div>
    )
};

export default Label;
