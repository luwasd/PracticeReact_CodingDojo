// MyButtonComponent.js
import React, { Component } from 'react';
import styles from './myButton.module.css';


class Estilos extends Component {
    render() {
        return <button className={ styles.btn }>{this.props.children}</button>;
    }
}

export default Estilos;

