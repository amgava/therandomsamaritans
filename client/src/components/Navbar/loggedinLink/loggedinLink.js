import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function loggedinLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/'} className="menuLink"><strong>Login / Sign-Up</strong></Link>
        </li>
    );
}

export default loggedinLink;