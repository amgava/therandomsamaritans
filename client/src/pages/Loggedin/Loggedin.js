import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Userok from "./Userok";
import Makepost from "./Makepost";
import Searchpost from "./Searchpost";
import Footer from "../../components/Footer/Footer";

function Loggedin() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                {/* Make Post Page */}
                <Route exact={true} path="/userok" component={Userok} />
                {/* Make Post Page */}
                <Route exact={true} path="/makepost" component={Makepost} />
                {/* Search Posts Page */}
                <Route exact={true} path="/searchpost" component={Searchpost} />
                <Footer />
            </div>
        </Router>
    );
}

export default Loggedin;