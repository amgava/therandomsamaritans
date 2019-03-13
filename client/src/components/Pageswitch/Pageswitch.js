import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pageswitch.css";

export default class Pageswitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserID: "",
            whichPage: true
        };
    }

    togglewhichpage = (e) => {
        if (this.state.whichPage === true) {
            this.setState({ whichPage: false });
            console.log(this.state.whichPage);
        } else {
            this.setState({ whichPage: true });
            console.log(this.state.whichPage);
        }
    };

    renderPage = () => {
        console.log(this.state);
        if (this.state.whichPage === true) {
            return (
                <div className="pageSwitchBar">
                    <button onClick={this.togglewhichpage} className="pageToggleButton">
                        Toggle On</button>
                        <br></br>
                    <Link to={'/makepost'}>Go To Post Page</Link>
                    <Link to={'/searchpost'}>Go To Search Page</Link>
                </div>
            );
        } else {
            return (
                <div className="pageSwitchBar">
                    <button onClick={this.togglewhichpage} className="pageToggleButton">
                        Toggle Off</button>
                        <br></br>
                    <Link to={'/makepost'}>Go To Post Page</Link>
                    <Link to={'/searchpost'}>Go To Search Page</Link>
                </div>
            );
        }
    };

    render() {
        return this.renderPage();
    }
}
