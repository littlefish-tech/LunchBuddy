import React from "react";
import GroupButton from "../GroupButton";

function SignupForm(props) {
  return (
    <div className="container" style={{ position: "absolute", top: "40vh", "text-align": "center" }}>
      <div className="signupform-group" style={{ width: "100vw" }} >
        <div><input className="signup-form" onChange={props.handleSignupInput} name="username" placeholder="Username" value={props.value} /></div>
        <div><input className="signup-form" onChange={props.handleSignupInput} name="password" placeholder="Password" value={props.value} /></div>
        <GroupButton onClick={props.handleSignupBtn}>Sign Up</GroupButton>
      </div>
    </div>
  )
}

export default SignupForm;