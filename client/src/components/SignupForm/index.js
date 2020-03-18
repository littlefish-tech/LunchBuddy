import React from "react";
import GroupButton from "../GroupButton";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function SignupForm(props) {
    return (
    <div>
    <div className = "signupform-group" >
    <div><input className="signup-form" onChange={props.handleSignupInput} name="username" value = {props.value}/></div>
    <div><input className="signup-form" onChange={props.handleSignupInput} name="password" value = {props.value}/></div>



      <GroupButton onClick={props.handleSignupBtn}><Link to={props.redirectTo}>Sign Up</Link></GroupButton>
   </div>
   {/* <GroupButton onClick={props.handleJoinBut}>Join Group</GroupButton> */}
  </div>
    )
  }
  
  export default SignupForm;