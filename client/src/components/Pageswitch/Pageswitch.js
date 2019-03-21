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

    renderComponent = () => {
        const getUrl = window.location.href;
        const parseUrl = getUrl.split("/");
        const verifyPage = parseUrl[3];
        const passUser = parseUrl[4];
        if (verifyPage === "searchpost") {    

            return (<div className="pageSwitchBar"><Link onClick={this.togglewhichpage} to={`/makepost/${passUser}`}><button className="btn btn-lrg btn-warning" >Make Post</button></Link></div>);
        } else {
            return (<div className="pageSwitchBar"><Link onClick={this.togglewhichpage} to={`/searchpost/${passUser}`}><button className="btn btn-lrg btn-warning" >Search Posts</button></Link></div>);
        }
    };

    render() {
        return this.renderComponent();
    }
}
