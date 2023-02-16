import React, { Component } from 'react';


class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On", luna: "Llena"
        };
    }
    flipSwitch = () => {
        if (this.state.position === "On") {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }
    flipLuna = () => {
        if (this.state.luna === "Llena") {
            this.setState({ luna: "Menguante" });
        } else {
            this.setState({ luna: "Llena" });
        }
    }
    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position} {this.state.luna}</p>
                <button onClick= { this.flipSwitch }>Flip Switch</button>
                <button onClick={ this.flipLuna }>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;
