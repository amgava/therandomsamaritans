import React, { Component } from "react";
import Hometop from "./Hometop";
import Newuserform from "../../components/Signupform/Signupform";
import Loginform from "../../components/Loginform/Loginform";
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            currentPage: "login",
            userCheck: {}
        };
        this.togglePageState = this.togglePageState.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewUserFormSubmit = this.handleNewUserFormSubmit.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    togglePageState = () => {
        console.log("hello ", this.state.currentPage);
        if (this.state.currentPage === "login") {
            this.setState({ currentPage: "signup" })
        } else {
            this.setState({ currentPage: "login" })
        }
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
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword
        }
        e.preventDefault();
        this.setState({ userCheck: newUser });
        this.submitNewUser();
    };

    handleLoginFormSubmit = e => {
        const checkUser = {
            email: this.state.email,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword
        }
        e.preventDefault();
        this.setState({ userCheck: checkUser });
        this.checkUserLogin();
    };

    submitNewUser = () => {
        console.log("submitNewUser ", this.state.userCheck);
        // API.createUser(newuser)
        //     .then(res => this.setState({ userCheck: {} }))
        //     .catch(err => console.log(err));
    };

    checkUserLogin = () => {
        console.log("checkUserLogin ", this.state.userCheck);
        // API.checkUser(userCheck)
        //     .then(res => this.setState({ userCheck: {} }))
        //     .catch(err => console.log(err));
    };

    renderPage = () => {
        if (this.state.currentPage === "signup") {
            return (
                <div className="App-body">
                    <Hometop onClick={() => this.togglePageState()} />
                    <Loginform
                        email={this.state.email}
                        password={this.state.password}
                        handleNewUserFormSubmit={this.handleLoginFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            );
        } else {
            return (
                <div className="App-body">
                    <Hometop onClick={() => this.togglePageState()} />
                    <Newuserform
                        firstname={this.state.firstname}
                        lastname={this.state.lastname}
                        email={this.state.email}
                        password={this.state.password}
                        confirmpassword={this.state.confirmpassword}
                        handleNewUserFormSubmit={this.handleNewUserFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
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
