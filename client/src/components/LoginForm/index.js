import React from "react";
import GroupButton from "../GroupButton";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <div className="container" style={{ position: "absolute", top: "40vh", "text-align": "center" }}>
      <div className="signupform-group" style={{ width: "100vw" }} >
        <div><input className="signup-form" onChange={props.handleLoginInput} name="username" placeholder="Username" value={props.value} /></div>
        <div><input className="signup-form" onChange={props.handleLoginInput} name="password" placeholder="Password" value={props.value} /></div>
        <GroupButton onClick={props.handleLoginbtn}><Link to={props.redirectTo}>Login</Link></GroupButton>
      </div>
    </div>
  )
}

export default LoginForm;