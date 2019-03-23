import React from 'react';
import HomeLink from "./homeLink/homeLink";
import LoggedinLink from "./loggedinLink/loggedinLink";
import ContactLink from "./contactLink/contactLink";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="App-navbar">
            <ul className="nav">
                <HomeLink />
                <LoggedinLink />
                <ContactLink />
            </ul>
        </div>
    );
}

export default Navbar;