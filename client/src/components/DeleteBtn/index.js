import React from "react";
import "./style.css"

function DeleteBtn(props) {
    return (
    <button className="detele-btn" {...props} role="button" tabIndex="0">
       Delete Group
    </button>
    );
}

export default DeleteBtn;