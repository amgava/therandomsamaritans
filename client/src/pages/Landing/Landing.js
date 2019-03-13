import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Landing() {
    return (
        <div className="wrapper">
            <p>The Landing Page!
            <Link to={'/searchpost'}>Go To Search Page</Link>
            <br></br>
            <Link to={'/makepost'}>Go To Post Page</Link>
            </p>
            <Footer />
        </div>
    );
}

export default Landing;