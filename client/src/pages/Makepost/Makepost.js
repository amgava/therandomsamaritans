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
                <p>This Page Will Hold The Make New Post Form</p>
                <Footer />
            </div>
        </div>
    );
}

export default Makepost;