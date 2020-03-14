<<<<<<< HEAD
import React, { Component } from "react";
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/api/user', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}
export default Signup;
=======
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


>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb
