import React, { Component } from "react";
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
import "./Makepost.css";
const moment = require("moment");

export default class Makepost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            category: "",
            location: "",
            description: "",
            contactNo: "",
            price: "",
            expiryDate: `${moment().add(1, 'days').format("YYYY-MM-DD")}`,
            currentUser: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewPostsFormSubmit = this.handleNewPostsFormSubmit.bind(this);
    }

    componentDidMount() {
        const getUrl = window.location.href;
        const parseUrl = getUrl.split("/");
        const verifyUser = parseUrl[parseUrl.length - 1];
        if (verifyUser === "landing") {
            console.log("please log in");
        } else
            this.setState({ currentUser: [verifyUser] });
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        // console.log(this.state.results);
    };

    handleNewPostsFormSubmit = (e) => {
        e.preventDefault();
        let newPost;
        let reqcategory = this.state.category;
        let reqlocation = this.state.location;
        let reqdescription = this.state.description;
        let reqcontactNo = this.state.contactNo;
        let reqprice = this.state.price;
        let reqexpiryDate = this.state.expiryDate;
        let requserId = this.state.currentUser;
        newPost = {
            category: reqcategory,
            location: reqlocation,
            description: reqdescription,
            contactNo: reqcontactNo,
            price: reqprice,
            expiryDate: reqexpiryDate,
            User: requserId
        }
        console.log(newPost);
        API.savePost(newPost).then(res => {
            if (res.status !== 200) {
                throw new Error(res.data.message);
            }
            console.log("Post Status: " + res.statusText);
            console.log(res);
        });
        this.setState({
            category: "",
            location: "",
            description: "",
            price: { type: Number, default: '0' },
            expiryDate: `${moment().add(1, 'days').format("YYYY-MM-DD")}`,
        });
    };

    render() {
        return (
            <div className="wrapper">
                <header className="App-header">
                    <Pageswitch />
                    <Form className="searchInputForm" />
                </header>
                <div className="App-body">
                    <div className="makePostPageBox">
                        <Form className="clearfix">
                            <h2>Post New Item</h2>
                            <div className="formItem">
                                <Form.Label
                                    className="formLabel">
                                    Category</Form.Label>
                                <Form.Control as="select"
                                    id="category"
                                    onChange={this.handleInputChange}
                                    name="category"
                                    type="text"
                                    value={this.state.category}
                                >
                                    <option defaultValue="Select">Select</option>
                                    <option value="Food">Food</option>
                                    <option value="Services">Services</option>
                                    <option value="Handywork">Handywork</option>
                                    <option value="Babysitting">Babysitting</option>
                                </Form.Control>
                            </div>
                            <div className="formItem">
                                <Form.Label
                                    className="formLabel">
                                    Location</Form.Label>
                                <Form.Control as="select"
                                    id="location"
                                    onChange={this.handleInputChange}
                                    name="location"
                                    type="text"
                                    value={this.state.location}
                                >
                                    <option defaultValue="Select">Select</option>
                                    <option value="St Clair Station">St Clair Station</option>
                                    <option value="Yonge and Bloor">Yonge and Bloor</option>
                                    <option value="Bathurst Station">Bathurst Station</option>
                                    <option value="Coxwell Station">Coxwell Station</option>
                                </Form.Control>
                            </div>
                            <br />
                            <br />
                            <div className="descriptionBox">
                                <Form.Label
                                    className="formLabel"
                                >Description</Form.Label>
                                <Form.Control as="textarea" rows="5"
                                    id="description"
                                    onChange={this.handleInputChange}
                                    value={this.state.description}
                                    name="description"
                                    placeholder="description"
                                />
                            </div>
                            <br />
                            <br />
                            <div className="formItem">
                                <Form.Control
                                    id="contactNo"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.contactNo}
                                    name="contactNo"
                                    placeholder="contactNo"
                                />
                            </div>
                            <div className="formItem">
                                <Form.Control
                                    type="number"
                                    id="price"
                                    onChange={this.handleInputChange}
                                    value={this.state.price}
                                    name="price"
                                    placeholder="price"
                                />
                            </div>
                            <div className="formItem">
                                <Form.Control
                                    type="date"
                                    id="expiryDate"
                                    onChange={this.handleInputChange}
                                    value={this.state.expiryDate}
                                    name="expiryDate"
                                />
                            </div>
                            <div className="formItem">
                                <Button variant="warning"
                                    className="submitNewPost"
                                    onClick={this.handleNewPostsFormSubmit}
                                >Create New Post</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
