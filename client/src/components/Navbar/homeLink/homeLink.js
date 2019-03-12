import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function homeLink() {
    return (
        <li className="App-logo">
        <Link to={'/'} className="logo"><img className="logo" alt="homelink" src={require('./logo.png')} /></Link>
        </li>
    );
}

export default homeLink;