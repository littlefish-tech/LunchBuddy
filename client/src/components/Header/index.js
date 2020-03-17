import React from "react";
import "./style.css";
import GroupButton from "../GroupButton";


function Header(props) {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="backgroundImg">
              <img src="/backgroundImage.jpg" alt="background image" />

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
    </div>
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