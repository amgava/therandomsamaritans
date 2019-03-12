import React from 'react';
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Footer from "../../components/Footer/Footer";

function Makepost() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <Pageswitch />
            </header>
            <div className="App-body">
                <p>This is the page for making new posts</p>
                <Footer />
            </div>
        </div>
    );
}

export default Makepost;