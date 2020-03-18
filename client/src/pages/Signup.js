import React, { Component } from 'react'
import axios from 'axios'
import API from '../utils/API';
import Nav from "../components/Nav";
import SignupFrom from "../components/SignupForm";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Signup extends Component {
		state = {
			username: '',
			password: '',
			redirectTo: "/Signup"

		}

	handleSignupInput = event => {
		const { name, value } = event.target;
    this.setState({
      [name]: value
    });
	console.log(this.state.username);
	console.log(this.state.password);
	};

	handleSignupBtn = event => {
		event.preventDefault(); 
		console.log("please click the save btn");
		API.saveUsers({
			username: this.state.username,
			password: this.state.password
		})
		.then(response => {
			console.log(response)
			if(response.data) {
				console.log("successgul signup")
				this.setState({
					redirectTo:"/lunchbuddy"
				})
			} else {
				console.log("Sign-up error");
			}
		}).catch(error => {
			console.log("Sign up server error: ")
			console.log(error)
		})
		console.log(this.state.username)
	}



	render(){
		return (
			<Wrapper>
			<Nav>Nav</Nav>
			<SignupFrom 
			handleSignupInput={this.handleSignupInput}
			handleSignupBtn={this.handleSignupBtn}
			username={this.state.username}
			password={this.state.password}
			redirectTo={this.state.redirectTo}>
			</SignupFrom>
			<Footer>Footer</Footer>
			</Wrapper>
		);
	}
	
	}
export default Signup;




