import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Userok from "./Userok";
import Makepost from "./Makepost";
import Searchpost from "./Searchpost";
import Footer from "../../components/Footer/Footer";

function Loggedin() {
    return (
        <Router>
            <div className="App-body">
                {/* Login Form */}
                <Route exact={true} path="/login" component={Login} />
                {/* Login Landing Page */}
                <Route exact={true} path="/login/userok" component={Userok} />
                {/* Make Post Page */}
                <Route exact={true} path="/login/makepost" component={Makepost} />
                {/* Search Posts Page */}
                <Route exact={true} path="/login/searchpost" component={Searchpost} />
                <Footer />
            </div>
        </Router>
    );
}

export default Loggedin;