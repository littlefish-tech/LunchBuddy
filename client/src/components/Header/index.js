import React from "react";
import "./style.css";
import GroupButton from "../GroupButton";


function Header(props) {
  return (
    <div className="jumbotron">
        <div className="row">
          <div className="col-sm-6">
              <img src="/backgroundImage.jpg" alt="background image" className="backgroundImg" />
          </div>
          <div className="col-sm-6">
            <div className="form-group" style={{width:"80%", "border-color": "#CA364B" }}>
              <input className="form-control" onChange={props.handleInputChange} name="lunchName" placeholder="Lunch Name" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="restaurant" placeholder="Restaurant" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="host" placeholder="Host" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="lunchTime" placeholder="Lunch Time" value={props.value} />
              <GroupButton onClick={props.handleCreateBut}>Create Group</GroupButton>
            </div>
          </div>
        </div>
      </div>
  );
}



export default Header;