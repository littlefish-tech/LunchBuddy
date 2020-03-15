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
			// confirmPassword: '',

		}
		// this.handleSubmit = this.handleSubmit.bind(this)
		// this.handleChange = this.handleChange.bind(this)
	
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
			password={this.state.password}>
			</SignupFrom>
			<Footer>Footer</Footer>
			</Wrapper>
		);
	}
	
	}
export default Signup;







// class Lunchbuddy extends Component {
// state = {
//     test: "signup"
// }

// render(){
//     return (
//         <p>{this.state.test}</p>

//     );
// }

// }
// export default Lunchbuddy;



		//request to server to add a new username/password
		// axios.post('/api/users/', {
		// 	username: this.state.username,
		// 	password: this.state.password
		// })
		// 	.then(response => {
		// 		console.log(response)
		// 		if (!response.data.errmsg) {
		// 			console.log('successful signup')
		// 			this.setState({ //redirect to login page
		// 				redirectTo: '/api/login'
		// 			})
		// 		} else {
		// 			console.log('username already exists or is already taken')
		// 		}
		// 	}).catch(error => {
		// 		console.log('signup error: ')
		// 		console.log(error)

		// 	})


