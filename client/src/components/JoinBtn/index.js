import React from "react";
import "./style.css"

function JoinBtn(props) {
    return (
    <button className="join-button" {...props} role="button" tabIndex="0">
       Join Group
    </button>
    );
}

export default JoinBtn;