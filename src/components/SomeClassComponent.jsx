import React, { Component } from "react";

class SomeClassComponent extends Component {
    render() {
        return <div>
            <h1>This is no my first class component.</h1>
            {this.props.children}
        </div>
    }
}

export default SomeClassComponent;