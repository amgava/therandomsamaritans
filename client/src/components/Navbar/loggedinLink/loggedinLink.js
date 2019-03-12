import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function loggedinLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/login'} className="menuLink"><strong>Login</strong></Link>
        </li>
    );
}

export default loggedinLink;