import React from "react";
import "./style.css";
import GroupButton from "../GroupButton";
import Jumbotron from "react-bootstrap/Jumbotron";


function Header(props) {
  return (
    <Jumbotron>
      <div className="container formGroup">
        <div className="row">
          <div className="col-md-6">
            <div className="backgroundImg" style={{ backgroundImage: 'url(${props.backgroundImage' }}>
              {/* {props.children} */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" onChange={props.handleInputChange} name="lunchName" placeholder="Lunch Name" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="restaurant" placeholder="Restaurant" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="host" placeholder="Host" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="lunchType" placeholder="Lunch Type" value={props.value} />
              <input className="form-control" onChange={props.handleInputChange} name="lunchTime" placeholder="Lunch Time" value={props.value} />
              <GroupButton onClick={props.handleCreateBut}>Create Group</GroupButton>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}


//   <div>
//     <div>
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Create Group</button>
//     </div>
//     <div>
//       <div className="modal" id="exampleModalLong" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="container">
//                 <div className="form-group" >
//                   <input className="form-control" onChange={props.handleInputChange} name="lunchName" placeholder="Lunch Name" value={props.value} />
//                   <input className="form-control" onChange={props.handleInputChange} name="restaurant" placeholder="Restaurant" value={props.value} />
//                   <input className="form-control" onChange={props.handleInputChange} name="host" placeholder="Host name" value={props.value} />
//                   <input className="form-control" onChange={props.handleInputChange} name="lunchType" placeholder="Lunch Type" value={props.value} />
//                   <input className="form-control" onChange={props.handleInputChange} name="lunchTime" placeholder="Lunch Time" value={props.value} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )
// }


export default Header;