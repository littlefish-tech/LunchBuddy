import React from "react";
import GroupButton from "../GroupButton";
import { Link } from "react-router-dom";

function LoginForm(props) {
    return (
    <div>
    <div className = "signupform-group" >
    <div><input className="signup-form" onChange={props.handleLoginInput} name="username" value = {props.value}/></div>
    <div><input className="signup-form" onChange={props.handleLoginInput} name="password" value = {props.value}/></div>



      <GroupButton onClick={props.handleLoginbtn}><Link to={props.redirectTo}>Login</Link></GroupButton>
   </div>
   {/* <GroupButton onClick={props.handleJoinBut}>Join Group</GroupButton> */}
  </div>
    )
  }
  
  export default LoginForm;