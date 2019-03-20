import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Makepost from "./pages/Makepost/Makepost";
import Searchpost from "./pages/Searchpost/Searchpost";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login.js";
import Contact from "./pages/Contact/Contact";
import Landing from "./pages/Landing/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/makepost" component={Makepost} />
        <Route path="/searchpost" component={Searchpost} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
