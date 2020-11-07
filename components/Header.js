import React, { Component } from 'react';
import StyleSheet from '../Css/collapse.css';


export default class Header extends Component {
    render() {
        return (
            <nav className="navBar">
                <img className="image" src="/dnaLogo.png" alt="image"/>
                <h1>
                    <a className="title" href="../index.js">DNA Library</a>
                </h1>
                <a href="https://www.w3schools.com/colors/colors_shades.asp">
                    <button className="btn" >About</button>
                </a>
            </nav>
        )
    }
}
