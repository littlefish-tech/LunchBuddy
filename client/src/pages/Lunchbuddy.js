import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Card from "../components/Card";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";


class Lunchbuddy extends Component {
state = {
    lunches: [],
    lunchName: "",
    restaurant: "",
    host: "",
    lunchType: ""
};

componentDidMount() {
  this.loadLunches();
}

loadLunches = () => {
  API.getLunches()
  .then(res => {
    console.log(res.data);
    this.setState({lunches: res.data});
  });
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.lunchName);
  };


handleCreateBut = event => {
  // event.preventDefault(); 
    API.saveLunch({
      lunchName: this.state.lunchName,
      restaurant: this.state.restaurant,
      host: this.state.host,
      lunchType: this.state.lunchType
    });
    console.log(this.state.lunchName);
}

// handleJoinBut = event => {
//     event.preventDefault(); 
//       console.log("click Join");
//   }
render(){
    return (
        <Wrapper>
        <Nav>Nav</Nav>
        <Header 
        handleInputChange = {this.handleInputChange}
        // handleJoinBut = {this.handleJoinBut}
        handleCreateBut={this.handleCreateBut}
        lunchNameValue = {this.state.lunchName}
        restaurant = {this.state.restaurant}
        host = {this.state.host}
        lunchType = {this.state.lunchType}>
        </Header>
        <p>{this.state.test}</p>
        <Card>Card</Card>
        <Footer>Footer</Footer>
        </Wrapper>
    );
}

}
export default Lunchbuddy;