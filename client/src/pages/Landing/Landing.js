import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
        };
    }

    componentDidMount() {
        const getUrl = window.location.href;
        const parseUrl = getUrl.split("/");
        const verifyUser = parseUrl[parseUrl.length - 1];
        if(verifyUser === "landing") {
            console.log("please log in");
        } else 
        this.setState({ currentUser: [verifyUser] });
    }

    componentDidUpdate() {
        console.log(this.state.currentUser);
    }

    checkForLogin = () => {
        if (this.state.currentUser === "2") return (<div className="App-body"><Link to={'/'}>Please log in!</Link></div>)
        else
            return (
                <div className="wrapper">
                    <header className="App-header">
                        <div className="landingBar">
                            <strong className="landingTitle">The Landing Page!</strong>
                        </div>
                    </header>
                    <div className="App-body">
                        <Link to={'/searchpost'}>Search Items</Link>
                        <strong>   Choose what to do first   </strong>
                        <Link to={'/makepost'}>Create Post</Link>
                    </div>
                    <Footer />
                </div>
            );
    }

    render() {
        return this.checkForLogin();
    }
}
