import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Hometop from "./Hometop";
import Newuserform from "../../components/Newuserform/Newuserform";
import Loginform from "../../components/Loginform/Loginform";
import API from "../../utils/API";

import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            location: "",
            password: "",
            confirmpassword: "",
            currentPage: false,
            userCheck: {}
        };
        this.resetform = this.resetform.bind(this);
        this.togglepagestate = this.togglepagestate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewUserFormSubmit = this.handleNewUserFormSubmit.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    togglepagestate = () => {
        const whatState = !this.state.currentPage;
        this.setState({ currentPage: whatState });
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        this.setState({
            [name]: value
        });
    };

    handleNewUserFormSubmit = e => {
        if (this.state.password === this.state.confirmpassword) {
            const newUser = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                password: this.state.password,
                email: this.state.email,
                location: this.state.location
            }
            e.preventDefault();
            this.setState({ userCheck: newUser });
            this.submitNewUser(newUser);
        } else {
            alert("passwords do not match");
            this.setState({ password: "", confirmpassword: "" });
        }
    };

    submitNewUser = (newuser) => {
        API.saveUser(newuser)
            .then(function (data) {
                console.log("newUser ", newuser);
                console.log("res", data);
            })
            .catch(err => console.log(err));
        this.resetform();
    };

    handleLoginFormSubmit = e => {
        e.preventDefault();
        const checkUser = {
            email: this.state.email,
            password: this.state.password,
        }
        this.setState({ userCheck: checkUser });
        this.checkUserLogin();
    };

    checkUserLogin = () => {
        const isAuth = {
            email: this.state.email,
            password: this.state.password,
        }
        API.checkUser(isAuth)
            .then(res => {
                return <Redirect to={`/landing/${res._id}`} />
            })
            .catch(err => console.log(err));
    };

    resetform = () => {
        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            location: "",
            password: "",
            confirmpassword: "",
            userCheck: {}
        });
    }

    renderPage = () => {
        if (this.state.currentPage === false) {
            return (
                <div className="wrapper">
                    <header className="App-header">
                        <div className="landingBar">
                            <p><strong className="landingTitle">Sign Up Now!</strong></p>
                        </div>
                    </header>
                    <div className="App-body">
                        <Hometop togglepagestate={this.togglepagestate} />
                        <Loginform
                            email={this.state.email}
                            password={this.state.password}
                            handleNewUserFormSubmit={this.handleLoginFormSubmit}
                            handleInputChange={this.handleInputChange}
                        />
                        <Link to={'/landing/testUser'}>  Go To Logged-In Page  </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="wrapper">
                    <header className="App-header">
                        <div className="landingBar">
                            <p><strong className="landingTitle">Sign Up Now!</strong></p>
                        </div>
                    </header>
                    <div className="App-body">
                        <Hometop togglepagestate={this.togglepagestate} />
                        <Newuserform
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}
                            password={this.state.password}
                            email={this.state.email}
                            location={this.state.location}
                            confirmpassword={this.state.confirmpassword}
                            handleNewUserFormSubmit={this.handleNewUserFormSubmit}
                            handleInputChange={this.handleInputChange}
                        />
                        <Link to={'/landing'}>  Go To Logged-In Page  </Link>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="signupSpacer">
                {this.renderPage()}
            </div>
        );
    }
}
