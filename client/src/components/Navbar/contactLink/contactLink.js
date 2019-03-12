import React from 'react';
import { Link } from "react-router-dom";
import "../Navbar.css";

function contactLink() {
    return (
        <li className="nav-item menuLink">
        <Link to={'/contact'} className="menuLink"><strong>Contact</strong></Link>
        </li>
    );
}

export default contactLink;