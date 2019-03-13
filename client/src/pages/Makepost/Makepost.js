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
                <p>This Page Holds Search Results</p>
                <Footer />
            </div>
        </div>
    );
}

export default Makepost;