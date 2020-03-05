import React from "react";
import "./style.css";
import GroupButton from "../GroupButton";

function Header(props) {
    return (
    <div>
    <div className = "form-group" >
      <input className="form-control" onChange={props.handleInputChange} name="lunchName" value = {props.value}/>
    
      <GroupButton onClick={props.handleCreateBut}>Create Group</GroupButton>
   </div>
   {/* <GroupButton onClick={props.handleJoinBut}>Join Group</GroupButton> */}
  </div>
    )
  }
  
  export default Header;