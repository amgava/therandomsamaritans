import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Userok() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">You Logged In!</h1>
                <Navbar />
            </header>
            <div className="App-body">
                <p>This is the user login page, they will be welcomed and offered to post or search from here as a landing page.</p>
                <Footer />
            </div>
        </div>
    );
}

export default Userok;