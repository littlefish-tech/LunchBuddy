import React from "react";
import "./style.css";

function GroupButton(props) {
    return (
    <button onClick={props.onClick}>{props.children}</button>
    );
  }
  
  export default GroupButton;