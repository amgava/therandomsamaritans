import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Mybuys from "../../components/Mybuys/Mybuys";
import Myposts from "../../components/Myposts/Myposts";
import Login from "../../pages/Login/Login";
import ModalMain from "../../components/Modal/Modal";
import "./Landing.css";

function Landing(props) {
    console.log("this is landing props " + Object.values(props));
    if (props.currentuser !== "") {
        return (<div className="wrapper">
            <header className="App-header">
                <div className="landingBar">
                </div>
            </header>
            <div className="App-body">
                <div className="landingBody">
                    <strong className="landingTitle">Welcome To Comet!</strong>
                    <br /> <br />
                    <div className="landingChoice">
                        <Link to={`/searchpost/${props.currentuser}`}>Search Items</Link>
                        <strong>   Choose what to do first   </strong>
                        <button onClick={1}>Create Post</button>
                        <ModalMain showModal={true} />
                    </div>
                    <div className="landingInfo">
                        <Myposts activeposts={props.activeposts} />
                        <Mybuys activebuys={props.activebuys} />
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