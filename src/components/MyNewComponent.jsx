import React, { Component } from "react";

class MyNewComponent extends Component {
    render (){
        const {Nombre, Edad} = this.props;
        return (
            <div>
                <h1>My name is {Nombre} and I'm {Edad} years old.</h1>
            </div>
        );
    }
}
export default MyNewComponent;