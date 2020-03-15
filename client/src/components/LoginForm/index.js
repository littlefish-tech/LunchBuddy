import React from "react";
import GroupButton from "../GroupButton";

function LoginForm(props) {
    return (
    <div>
    <div className = "signupform-group" >
    <div><input className="signup-form" onChange={props.handleLoginInput} name="username" value = {props.value}/></div>
    <div><input className="signup-form" onChange={props.handleLoginInput} name="password" value = {props.value}/></div>



      <GroupButton onClick={props.handleLoginbtn}>Login</GroupButton>
   </div>
   {/* <GroupButton onClick={props.handleJoinBut}>Join Group</GroupButton> */}
  </div>
    )
  }
  
  export default LoginForm;