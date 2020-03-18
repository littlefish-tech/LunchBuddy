import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

function NavBar(props) {
    return (

        <header className="navbar App-header" id="nav-container">
            <h1 className="App-title">Lunch Buddy</h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <section className="navbar-section">
                    <Link to={props.buttonLink} className="btn">
                        <span className="">{props.buttonName}</span>
                    </Link>
                    {/* <Link to="/Signup" className="btn">
                        <span className="">Sign Up</span>
                    </Link> */}
                </section>

            </nav>
        </header>
    );
}

export default NavBar;

// function NavBar() {
//     return (

//         <header className="navbar App-header" id="nav-container">
//             <h1 className="App-title">Lunch Buddy</h1>
//             <nav className="navbar navbar-expand-lg navbar-dark">
//                 <section className="navbar-section">
//                     <Link to="/Login" className="btn">
//                         <span className="">Login</span>
//                     </Link>
//                     <Link to="/Signup" className="btn">
//                         <span className="">Sign Up</span>
//                     </Link>
//                 </section>

//             </nav>
//         </header>
//     );
// }
