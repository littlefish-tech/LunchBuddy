import React from "react";
import "./style.css";
import GroupButton from "../GroupButton";


function Header(props) {
    return (
    <div>
    <div className = "form-group" >
      <input className="form-control" onChange={props.handleInputChange} name="lunchName" value = {props.value}/>
      <input className="form-control" onChange={props.handleInputChange} name="restaurant" value = {props.value}/>
      <input className="form-control" onChange={props.handleInputChange} name="host" value = {props.value}/>
      <input className="form-control" onChange={props.handleInputChange} name="lunchType" value = {props.value}/>
      <input className="form-control" onChange={props.handleInputChange} name="lunchTime" value = {props.value}/>
      {/* <input className="form-control" onChange={props.handleInputChange} name="LunchTime" value = {props.value}/> */}
      {/* <image className="form-control" onChange={props.handleInputChange} name="image" value = {props.value}/> */}
      {/* <a className="form-control" onChange={props.handleInputChange} name="lunchType" value = {props.value}/> */}


      <GroupButton onClick={props.handleCreateBut}>Create Group</GroupButton>
   </div>
   {/* <GroupButton onClick={props.handleJoinBut}>Join Group</GroupButton> */}
  </div>
    )
  }
  
  export default Header;