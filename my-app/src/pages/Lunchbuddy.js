import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Card from "../components/Card";


class Lunchbuddy extends Component {
state = {
    lunches: [],
    lunchName: ""
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state.lunchName);
  };


handleCreateBut = event => {
  event.preventDefault(); 
    console.log("click Create");
}

handleSubmitBut = event => {
    event.preventDefault(); 
      console.log("click Submit");
  }
render(){
    return (
        <Wrapper>
        <Nav>Nav</Nav>
        <Header 
        handleInputChange = {this.handleInputChange}
        handleSubmitBut = {this.handleSubmitBut}
        handleCreateBut={this.handleCreateBut}
        value = {this.state.lunchName}></Header>
        <p>{this.state.test}</p>
        <Card>Card</Card>
        <Footer>Footer</Footer>
        </Wrapper>
    );
}

}
export default Lunchbuddy;