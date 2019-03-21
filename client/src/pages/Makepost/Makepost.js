import React, { Component } from "react";
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
import "./Makepost.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Makepost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: { type: String },
            category: { type: String },
            location: { type: String },
            description: { type: [String] },
            contactNo: { type: String },
            price: { type: Number, default: '0' },
            expiryDate: { type: Date },
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
    };

    render() {
        return (
            <div className="wrapper">
                <header className="App-header">
                    <Pageswitch />
                </header>
                <div className="App-body">
                    <div className="makePostPageBox">
                        <Form className="clearfix">
                            <h2>Post New Item</h2>
<<<<<<< HEAD
=======
                            
>>>>>>> 47b7f91239edee1731ebbd77029df2af2e18264f
                            <div className="formItem">
                                <Form.Label
                                    className="formLabel">
                                    Category</Form.Label>
                                <Form.Control as="select"
                                    id="category"
                                    onChange={this.handleInputChange}
                                    name="category"
                                    type="text"
                                >
                                    <option defaultValue="Select">Select</option>
                                    <option defaultValue="Food">Food</option>
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
                                >
                                    <option defaultValue="Select">Select</option>
                                    <option defaultValue="St Clair Station">St Clair Station</option>
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
                                    value={this.description}
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
                                    value={this.contactNo}
                                    name="contactNo"
                                    placeholder="contactNo"
                                />
                            </div>
                            <div className="formItem">
                                <Form.Control
                                    type="number"
                                    id="price"
                                    onChange={this.handleInputChange}
                                    value={this.price}
                                    name="price"
                                    placeholder="price"
                                />
                            </div>
                            <div className="formItem">
                                <Form.Control
                                    type="date"
                                    id="expiryDate"
                                    onChange={this.handleInputChange}
                                    value={this.expiryDate}
                                    name="expiryDate"
                                    placeholder="expiryDate"
                                />
                            </div>
                            <div className="formItem">
                                <Button variant="primary"
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
