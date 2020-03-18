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
        userArrs: [],
        username: '',
        password: '',

    }


    handleLoginInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.username)
    }

    handleLoginbtn = (username) => {
        // console.log("You have clicked login");
        API.getUserName(username)
            .then(res => {
                this.setState({ userArrs: res.data })
            })
        const userArrs = this.state.userArrs
        // console.log(userArrs);

        for (let i = 0; i < userArrs.length; i++) {
            if (userArrs[i].username === this.state.username) {
                console.log("You are login@@#######")
                return (<Link to="/lunchbuddy" />)
            }
            else {
                console.log("please register$$$$$$$$$")
            }
        }

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
                    password={this.state.password}>
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
