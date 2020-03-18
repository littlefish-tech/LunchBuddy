import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import API from '../utils/API';
import Nav from "../components/Nav";
import LoginFrom from "../components/LoginForm";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



class Login extends Component {
            state = {
            userArrs:[],
            username: '',
            password: '',
            redirectTo: "",
            loggedIn: false,


        
        }
            // redirectTo: null
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
  

    handleLoginInput = event => {
        const { name, value} = event.target;
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
            console.log(response)
            if(response.status === 200) {
                //update App.js state
                this.setState({
                    loggedIn: true,
                    username: response.data.username,
                    redirectTo: "/lunchbuddy"
                })
            }
        })
    }
        // .catech(error => {
        //     console.log("login error: ")
        //     console.log(error);
        // })
  

// userArrs.values(userArrs).includes(this.state.username) ? console.log("You are signed In@@@@@@@@") : console.log("Please register")

// userArrs.map(userArr => {
//     userArr.username === this.state.username ? console.log("You are signed In@@@@@@@@") : console.log("Please register")

//     // console.log(this.state.userArr);
//     //    console.log(userArr.username);
//      }   
//   // if()  
// )    
// console.log(this.state.username)
    

    

    render(){
		return (
			<Wrapper>
			<Nav>Nav</Nav>
			<LoginFrom 
			handleLoginInput={this.handleLoginInput}
			handleLoginbtn={this.handleLoginbtn}
			username={this.state.username}
			password={this.state.password}
            redirectTo={this.state.redirectTo}>
			</LoginFrom>
			<Footer>Footer</Footer>
			</Wrapper>
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
