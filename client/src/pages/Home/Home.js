import React, { Component } from "react";
import { Link } from "react-router-dom";
import Newuserform from "../../components/Newuserform/Newuserform";
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
            userCheck: []
        };
        this.resetform = this.resetform.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewUserFormSubmit = this.handleNewUserFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

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
    }

    submitNewUser = (newuser) => {
        API.saveUser(newuser)
            .then(function (data) {
                console.log("newUser ", newuser);
                console.log("res", data);
            })
            .catch(err => console.log(err));
        this.resetform();
    }

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

    render() {
        return (
            <div className="wrapper">
                <header className="App-header">
                    <div className="landingBar">
                        <strong className="landingTitle">Sign Up Now!</strong><br />
                        <strong className="homeTitles">Already A Member?</strong><br />
                        <Link to={'/login'}><strong>Go To Login</strong></Link>
                    </div>
                </header>
                <div className="App-body">
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
                </div>
            </div>
        )
    }
}