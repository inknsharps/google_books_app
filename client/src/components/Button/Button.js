import React from "react";

const Button = ({ text = "Button", callback = () => {console.log("Button Clicked!")} }) => {
    return (
        <button className="Button btn btn-primary" onClick={ callback }>{ text }</button>
    )
};

export default Button;