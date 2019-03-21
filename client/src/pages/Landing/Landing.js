import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Mybuys from "../../components/Mybuys/Mybuys";
import Myposts from "../../components/Myposts/Myposts";
import Login from "../../pages/Login/Login";
import "./Landing.css";

function Landing(props) {
    console.log("this is landing props " + Object.values(props));
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
                <Mybuys mybuys={props.mybuys} />
                <Myposts myposts={props.myposts} />
                </div>
                <Footer />
            </div>)
        } else {
           return <Login />;
        }
    }

export default Landing;