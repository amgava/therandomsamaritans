import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Searchpost() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Search Posts</h1>
                <Navbar />
            </header>
            <div className="App-body">
                <p>This is the page for making search/browsing posts</p>
                <Footer />
            </div>
        </div>
    );
}

export default Searchpost;