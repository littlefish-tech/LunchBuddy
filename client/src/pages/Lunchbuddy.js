import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import {Card, CardList} from "../components/Card";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn"
import JoinBtn from "../components/JoinBtn"



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
    console.log(res);
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
  event.preventDefault(); 
  console.log("You are here~~~~~~~~~~~~")
  API.getYelpApi(this.state.restaurant)
    .then(res => {
      console.log(res.data.businesses[0]);
      API.saveLunch({
        lunchName: this.state.lunchName,
        restaurant: res.data.businesses[0].name,
        host: this.state.host,
        lunchType: this.state.lunchType
      })
    })
    
    // console.log(this.state.lunchName)
    .then(res => this.loadLunches())
}

deleteGroupBut = id => {
  console.log("you have clicked" + id)
  API.deleteLunch(id)
    .then(res => this.loadLunches())
    .catch(err => console.log(err))
}

handleJoinBut = id => {
    // event.preventDefault(); 
      console.log("click Join " + id);
  }

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
        <CardList>
          {this.state.lunches.map(lunch => (
        <Card  key={lunch._id}>
          <div>{lunch.lunchName}</div>
          <div>{lunch.restaurant}</div>
          <div>{lunch.host}</div>
          <div>{lunch.lunchType}</div>
          <DeleteBtn onClick={() => this.deleteGroupBut(lunch._id)} />
          <JoinBtn onClick={()=>this.handleJoinBut(lunch._id)}/>
        </Card>
        ))}
        </CardList>
        <Footer>Footer</Footer>
        </Wrapper>
    );
}

}
export default Lunchbuddy;