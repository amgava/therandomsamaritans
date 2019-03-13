import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

function Landing() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <div className="landingBar">
                    <strong className="landingTitle">The Landing Page!</strong>
                </div>
            </header>
            <div className="App-body">
                <Link to={'/searchpost'}>Search Items</Link>
                <strong>   Choose what to do first   </strong>
                <Link to={'/makepost'}>Create Post</Link>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;