import React from 'react';
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Footer from "../../components/Footer/Footer";

function Searchpost() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <Pageswitch />
            </header>
            <div className="App-body">
                <p>The Search Form Will Go Here</p>
                <Footer />
            </div>
        </div>
    );
}

export default Searchpost;