import React from "react";
import "./style.css";
import GroupButton from "../GroupButton";

function Header(props) {
    return <div><GroupButton onClick={props.handleCreateBut}>Create Group</GroupButton>
   <GroupButton onClick={props.handleSubmitBut}>Join Group</GroupButton>
    </div>
  }
  
  export default Header;