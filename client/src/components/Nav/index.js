import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

function NavBar() {
    return (

        <header className="navbar App-header" id="nav-container">
            <h1 className="App-title">Lunch Buddy</h1>
            <nav className="navbar navbar-expand-lg">
                <section className="navbar-section">
                    <Link to="/Login" className="btn btn-link text-secondary">
                        <span className="text-seconday">Login</span>
                    </Link>
                    <Link to="/Signup" className="btn btn-link">
                        <span className="text-secondary">Sign Up</span>
                    </Link>
                </section>

            </nav>
        </header>
    );
}

export default NavBar;