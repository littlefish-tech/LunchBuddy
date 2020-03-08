import { Link } from "react-router-dom";



import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">Lunch Buddy</Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className={window.location.pathname === "/Login" 
                        ? "nav-link active":"nav-link"}>Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className={window.location.pathname === "/Signup"
                        ? "nav-link active":"nav-link"}>Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
);
  }
  
  export default NavBar;