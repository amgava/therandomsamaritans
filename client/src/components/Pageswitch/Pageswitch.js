import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pageswitch.css";

export default class Pageswitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserID: "",
        };
    }

    componentDidMount() {
        const securityCheck = this.state.currentUserID;
        if (securityCheck !== "") {
            alert("Please log in");
        }
    }

    renderPage = () => {
        const getUrl = window.location.href;
        const parseUrl = getUrl.split("/");
        const verifyPage = parseUrl[3];
        console.log(verifyPage);
        if (verifyPage === "searchpost") {
            return (<div className="pageSwitchBar"><Link onClick={this.togglewhichpage} className="pageToggleButton" to={'/makepost'}>Go To Create New Post Page</Link></div>);
        } else {
            return (<div className="pageSwitchBar"><Link onClick={this.togglewhichpage} className="pageToggleButton" to={'/searchpost'}>Go To Search Page</Link></div>);
        }
    };

    render() {
        return this.renderPage();
    }
}
