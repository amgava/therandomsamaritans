import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Makepost() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Make Posts</h1>
                <Navbar />
            </header>
            <div className="App-body">
                <p>This is the page for making new posts</p>
                <Footer />
            </div>
        </div>
    );
}

export default Makepost;