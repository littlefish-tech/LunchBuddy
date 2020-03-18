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
    lunchType: "",
    lunchTime: "",
    image: "",
    restaurantLink: ""

    
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
        // "https://placehold.it/300x300" : res.data.businesses[0].image_url,
        lunchName: this.state.lunchName,
        image: res.data.businesses[0].image_url,
        restaurant: res.data.businesses[0].name,
        host: this.state.host,
        lunchType: this.state.lunchType,
        lunchTime: this.state.lunchTime,
        restaurantLink: res.data.businesses[0].url
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
      this.state.attendees++;
      API.updateLunch(id,this.state.attendees)
      .then(res => this.loadLunches())
      .catch(err => console.log(err));
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
        lunchType = {this.state.lunchType}
        lunchTime = {this.state.lunchTime}>
        
        </Header>
        <p>{this.state.test}</p>
        <CardList>
          {this.state.lunches.map(lunch => (
        <Card  key={lunch._id}>
          <img src={lunch.image} />
          <div>{lunch.lunchName}</div>
          <div>{lunch.restaurant}</div>
          <div>{lunch.host}</div>
          <div>{lunch.lunchType}</div>
          <div>{lunch.lunchTime}</div>
          <div><a href={lunch.restaurantLink}>View Restaurant Details</a></div>
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

// image={this.state.image}
        // restaurantLink={this.state.restaurantLink}