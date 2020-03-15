import React from "react";
import GroupButton from "../GroupButton";

function SignupForm(props) {
    return (
    <div>
    <div className = "signupform-group" >
    <div><input className="signup-form" onChange={props.handleSignupInput} name="username" value = {props.value}/></div>
    <div><input className="signup-form" onChange={props.handleSignupInput} name="password" value = {props.value}/></div>



      <GroupButton onClick={props.handleSignupBtn}>Sign Up</GroupButton>
   </div>
   {/* <GroupButton onClick={props.handleJoinBut}>Join Group</GroupButton> */}
  </div>
    )
  }
  
  export default SignupForm;