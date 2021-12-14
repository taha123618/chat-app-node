import React from "react";
import "../styles/textfield.scss"

const TextField=({className, type,placeholder, value,require})=>{
    return (
        <input type="text" className={`${className} textFiled`} require placeholder={placeholder}/>
    )
}
export default TextField;
