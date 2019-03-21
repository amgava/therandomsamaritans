import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Login from "../../pages/Login/Login";
import "./Landing.css";

function Landing(props) {
        if (props.currentuser !== "") {
           return ( <div className="wrapper">
                <header className="App-header">
                    <div className="landingBar">
                        <strong className="landingTitle">The Landing Page!</strong>
                    </div>
                </header>
                <div className="App-body">
                    <Link to={`/searchpost/${props.currentuser}`}>Search Items</Link>
                    <strong>   Choose what to do first   </strong>
                    <Link to={`/makepost/${props.currentuser}`}>Create Post</Link>
                </div>
                
                <Footer />
            </div>)
        } else {
           return <Login />;
        }
    }

export default Landing;