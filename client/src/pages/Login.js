import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import API from '../utils/API';
import Nav from "../components/Nav";
import LoginFrom from "../components/LoginForm";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";



class Login extends Component {
            state = {
            username: '',
            password: '',
        
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

    handleLoginbtn = username => {
		console.log("You have clicked login");
        API.getUserName(username)
        if(this.state.uername){
            console.log("You have already registered")
        } else{
            console.log("please sign up first")
        }
        // ({
			// username: this.state.username,
            // password: this.state.password
            
            // if(Users)
		// })
		console.log(this.state.username)
    }

    

    render(){
		return (
			<Wrapper>
			<Nav>Nav</Nav>
			<LoginFrom 
			handleLoginInput={this.handleLoginInput}
			handleLoginbtn={this.handleLoginbtn}
			username={this.state.username}
			password={this.state.password}>
			</LoginFrom>
			<Footer>Footer</Footer>
			</Wrapper>
		);
	}
	
	}
export default Login;