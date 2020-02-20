import React, { Component } from "react";


class Lunchbuddy extends Component {
state = {
    test: "signup"
}

render(){
    return (
        <p>{this.state.test}</p>

    );
}

}
export default Lunchbuddy;