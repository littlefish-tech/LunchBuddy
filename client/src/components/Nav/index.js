<<<<<<< HEAD
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
// import logo from '../logo.svg';
// import '../App.css';
import axios from 'axios'

class Navbar extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
=======
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
>>>>>>> 1cad8e5008f64bff357c6bdc4c1ef941d16d42a1
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div>

        <header className="navbar App-header" id="nav-container">
          <div className="col-4" >
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary">logout</span></Link>

              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary">home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">sign up</span>
                  </Link>
                </section>
              )}
          </div>
          <div className="col-4 col-mr-auto">
            <div id="top-filler"></div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">MERN Passport</h1>
          </div>
        </header>
      </div>

    );

  }
}

export default Navbar;