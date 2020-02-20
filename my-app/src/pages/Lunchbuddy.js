import React, { Component } from "react";


class Lunchbuddy extends Component {
state = {
    test: "stringtest"
}

render(){
    return (
        <p>{this.state.test}</p>

    );
}

}
export default Lunchbuddy;