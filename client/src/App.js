import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Lunchbuddy from "./pages/Lunchbuddy";
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import queryString from "query-string";


class App extends Component {

  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
}

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Lunchbuddy} />
            <Route exact path="/lunchbuddy" component={Lunchbuddy} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
          </Switch>
        </div>
 
      </Router>

    );
  }
}


export default App;
