import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import  Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Card from "../components/Card";


class Lunchbuddy extends Component {
state = {
    test: "stringtest"
}

render(){
    return (
        <Wrapper>
        <Nav>Nav</Nav>
        <Header>Header</Header>
        <p>{this.state.test}</p>
        <Card>Card</Card>
        <Footer>Footer</Footer>
        </Wrapper>
    );
}

}
export default Lunchbuddy;