import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Lunchbuddy from "./pages/Lunchbuddy";
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from "query-string";


// function App() {
//   return (
// <Router>
//       <div>
    
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={Lunchbuddy} />
          <Route exact path="/lunchbuddy" component={Lunchbuddy} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
=======
//         <Switch>
//           <Route exact path="/" component={Lunchbuddy} />
//           <Route exact path="/lunchbuddy" component={Lunchbuddy} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/Signup" component={Signup} />
//         </Switch>
//       </div>
//     </Router>
>>>>>>> 94ac8502e9f438a0b9616fd4fbdbf746c7065afb
    
//   );
// }

class App extends Component {

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
