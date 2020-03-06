import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Lunchbuddy from "./pages/Lunchbuddy";
import Signup from "./pages/Signup";


function App() {
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
  )}

  export default App;
