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

    componentDidMount() {
        const securityCheck = this.state.currentUserID;
        if (securityCheck !== "") {
            alert("Please log in");
        }
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
                    <button>
                        <Link onClick={this.togglewhichpage} className="pageToggleButton" to={'/makepost'}>Go To Post Page</Link>
                    </button>
                </div>
            );
        } else {
            return (
                <div className="pageSwitchBar">
                    <button>
                        <Link onClick={this.togglewhichpage} className="pageToggleButton" to={'/searchpost'}>Go To Search Page</Link>
                    </button>
                </div>
            );
        }
    };

    render() {
        return this.renderPage();
    }
}
