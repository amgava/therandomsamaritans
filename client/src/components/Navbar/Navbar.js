import React from 'react';
import HomeLink from "./homeLink/homeLink";
import LoggedinLink from "./loggedinLink/loggedinLink";
import ContactLink from "./contactLink/contactLink";

function Navbar() {
    return (
        <ul className="nav App-navbar">
            <HomeLink />
            <LoggedinLink />
            <ContactLink />
        </ul>
    );
}

export default Navbar;