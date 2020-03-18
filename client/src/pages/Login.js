import React, { Component, Fragment } from "react";
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import API from '../utils/API';
import Nav from "../components/Nav";
import LoginFrom from "../components/LoginForm";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



class Login extends Component {
    state = {
        userArrs:[],
        username: '',
        password: '',
        redirectTo: "/login",
        loggedIn: false,
        registered: false
    }


    handleLoginInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.username)
    }

    handleLoginbtn = event => {
		event.preventDefault();
        API.getUserName({
            username: this.state.username,
            password: this.state.password
        })
        .then( response => {
            console.log("login response: ")
            console.log(response.data)
            let usersInfo = response.data;
           for (let user of usersInfo){
          console.log(user.username)
            let usernameArr = user.username;
            if(usernameArr.includes(this.state.username)){
                this.setState({registered: true})
            }
            if(this.state.registered === true) {
                //update App.js state
                this.setState({
                    loggedIn: true,
                    username: response.data.username,
                    redirectTo: "/lunchbuddy"
                })
            }
            else{
                console.log("You need to register")
                this.setState({
                    redirectTo: "/Signup"
                })
            }
        }
        })
    
    }



    render() {
        return (
            <Fragment>
                <Nav>Nav</Nav>
                <img src="/backgroundImage.jpg" style={{width:"100%"}}/>
                <LoginFrom
                    handleLoginInput={this.handleLoginInput}
                    handleLoginbtn={this.handleLoginbtn}
                    username={this.state.username}
                    password={this.state.password}
                        redirectTo={this.state.redirectTo}>
                </LoginFrom>
                <Footer></Footer>
            </Fragment>
        );
    }

}
export default Login;

// userArrs.map(userArr => (userArr.username === this.state.username ? console.log("You are signed In") : console.log("Please register"))

// handleLoginbtn = () => {
//     console.log("You have clicked login");
//     API.getUserName() 
//     .then(res => {this.setState({userArr: res.data})
// })

// console.log(this.state.userArr);

//     // if()      
// }
