import React, { Component } from "react";
import SearchForm from "../../components/Signupform/Signupform";
import "./Home.css";

class Loginsignup extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        newuser: {}
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.submitNewUser(this.state.newuser);
    };

    submitNewUser = (newuser) => {
        API.createUser(newuser)
            .then(res => this.setState({ newuser: {} }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="signupSpacer">
                <SearchForm
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    email={this.state.email}
                    password={this.state.password}
                    confirmpassword={this.state.confirmpassword}
                    newuser={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default Loginsignup;