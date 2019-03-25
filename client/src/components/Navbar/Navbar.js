import React from 'react';
import HomeLink from "./homeLink/homeLink";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar App-navbar navbar-expand-lg navbar-dark bg-dark">
            <HomeLink />
            <span class="navbar-text">Community Marketplace</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="mainNav">
                        <Link to={'/contact'} className="nav-link btn-sml">Contact Us</Link>
            </div>
        </nav>
    );
}

export default Navbar;