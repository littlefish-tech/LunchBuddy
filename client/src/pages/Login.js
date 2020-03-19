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
        registered: false,
        message: "You please enter your username and password"
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
            if(this.state.registered) {
                //update App.js state
                this.setState({
                    loggedIn: true,
                    username: response.data.username,
                    redirectTo: "/lunchbuddy",
                    message: "You have already login"
                })
            }
            else{
                console.log("You need to register")
                this.setState({
                    redirectTo: "/Signup", 
                    message:"Please register first"
                })
            }
        }
        })
    
    }



    render() {
        return (
            <Fragment>
                <Nav buttonLink="/Signup" buttonName="Sign Up"></Nav>
                <img src="/backgroundImage.jpg" style={{width:"100%"}}/>
                <LoginFrom
                    handleLoginInput={this.handleLoginInput}
                    handleLoginbtn={this.handleLoginbtn}
                    username={this.state.username}
                    password={this.state.password}
                        redirectTo={this.state.redirectTo}
                        message={this.state.message}>
                </LoginFrom>
                <Footer><a href="https://mysterious-dusk-16372.herokuapp.com/" style={{color: "black"}}>@2020 LunchBuddy copyright</a></Footer>
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
