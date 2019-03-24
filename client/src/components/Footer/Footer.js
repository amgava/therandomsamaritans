import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <nav className="navbar App-footer sticky-bottom navbar-light bg-dark">
            <Link to={'/'} className="nav-link"><img className="footerImg" alt="Footer Logo" src={require('./commetpink2.png')} /></Link>
            <img className="nav-item footerSocial mx-3" alt="nav-item" src={require('./fabook.png')} />
            <img className="nav-item footerSocial mx-3" alt="nav-item" src={require('./instagram.png')} />
            <img className="nav-item footerSocial mx-3" alt="nav-item" src={require('./twit.png')} />
        </nav>
    );
}

export default Footer;