import React from "react";
import "./style.css";

function Button(props) {
    return (
    <button onClick={props.onClick}>{props.children}</button>
    );
  }
  
  export default Button;