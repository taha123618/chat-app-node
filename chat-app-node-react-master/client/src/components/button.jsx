import React from "react";
import "../styles/button.scss"
const Button=({value,onClick,className,type})=>{

    return (
        <button className={`${className} button`} type={type} onClick={onClick}>
            {value}
        </button>
    )
}
export default Button;
