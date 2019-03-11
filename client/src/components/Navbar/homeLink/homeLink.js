import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function homeLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/'}><strong>Home</strong></Link>
        </li>
    );
}

export default homeLink;