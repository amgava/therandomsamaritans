import React, { Component } from "react";
import Loginform from "../../components/Loginform/Loginform";
import Landing from "../../pages/Landing/Landing";
import API from "../../utils/API";
import "../Home/Home.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            currentUser: "",
            auth: false,
            myPosts: [],
            myBuys: []
        };
        this.resetform = this.resetform.bind(this);
        this.getMyPosts = this.getMyPosts.bind(this);
        this.getMyBuys = this.getMyBuys.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleLoginFormSubmit = e => {
        e.preventDefault();
        if ((this.state.email !== "") && (this.state.password !== "")) {
            console.log("Entered handleloginFormSubmit");
            const checkUserName = this.state.email;
            const checkPassword = this.state.password;
            this.checkUserLogin(checkUserName, checkPassword);
            this.resetform();
        } else {
            console.log("Please enter both email and password:");
        }
    }

    checkUserLogin = (username, password) => {
        console.log(username);
        console.log(password);
        let usercheck = {
            email: username,
            password: password
        }
        console.log(usercheck);
        API.loginUser(usercheck)
            .then(res => {
                console.log(res);
                if (res.data.status === "error") {
                    alert("Check your user credentials");
                    this.setState({ auth: false });
                    throw new Error(res.data.message);
                }
                this.setState({ currentUser: res.data._id });
            }).then(() => {
                console.log("user Exists and login Successful");
                this.setState({ auth: true });
            })
            .catch(err => console.log(err));
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

    getMyPosts = (id) => {
        const getPost = {
            _id: id,
        }
        API.getPosts(getPost)
            .then(res => {
                console.log("this is getMyPosts" + Object.keys(res.data));
                this.setState({ myPosts: res.data })
            })
            .catch(err => console.log(err));
    };

    getMyBuys = (id) => {
        const getBuys = {
            buyerId: id,
        }
        API.getPosts(getBuys)
            .then(res => {
                console.log("this is getMyBuys" + Object.keys(res.data));
                this.setState({ myBuys: res.data })
            })
            .catch(err => console.log(err));
    };

    renderPage = () => {
        if (this.state.auth === false) {
            return (
                <div className="wrapper">
                    <header className="App-header">
                        <div className="landingBar">
                            <p><strong className="landingTitle">Log In Below</strong></p>
                        </div>
                    </header>
                    <div className="App-body">
                        <Loginform
                            email={this.state.email}
                            password={this.state.password}
                            handleLoginFormSubmit={this.handleLoginFormSubmit}
                            handleInputChange={this.handleInputChange}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="wrapper">
                    <header className="App-header">
                        <div className="landingBar">
                            <p><strong className="landingTitle">Log In Below</strong></p>
                        </div>
                    </header>
                    <div className="App-body">
                        <Landing currentuser={this.state.currentUser} mybuys={this.myBuys} myposts={this.myPosts} />
                    </div>
                </div>
            );
        }
    };


    render() {
        return this.renderPage();
    }
}

