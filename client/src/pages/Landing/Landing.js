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
        return (<div className="wrapper">
            <div className="App-body">
                <div className="landingBody">
                    <div className="landingChoice">
                        <strong className="landingTitle">Welcome To Comet!</strong>
                        <br /><br />
                        <Link className="landingBar" to={`/searchpost/${props.currentuser}`}>Search Items</Link>
                        <strong className="landingBar">   Choose what to do first   </strong>
                        <Link className="landingBar" to={`/makepost/${props.currentuser}`}>Create Post</Link>
                    </div>
                    <div class="container">
                        <div className="row">
                            <div className="col-sm">
                            <Myposts activeposts={props.activeposts} />
                            </div>
                            <div className="col-sm">
                            <Mybuys activebuys={props.activebuys} />
                            </div>
                        </div>
                    </div>
                    <div className="landingInfo">
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
    } else {
        return <Login />;
    }
}

export default Landing;