import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Contact from "../../pages/Contact/Contact";
import Userok from "./Userok";
import Makepost from "./Makepost";
import Searchpost from "./Searchpost";

function Loggedin() {
    return (
        <Router>
            <div className="routingWrapper">
                {/* Login Form */}
                <Route exact={true} path="/login" component={Login} />
                {/* Login Landing Page */}
                <Route exact={true} path="/login/userok" component={Userok} />
                {/* Make Post Page */}
                <Route exact={true} path="/login/makepost" component={Makepost} />
                {/* Search Posts Page */}
                <Route exact={true} path="/login/searchpost" component={Searchpost} />
                {/* Contact Page */}
                <Route exact={true} path="login/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default Loggedin;