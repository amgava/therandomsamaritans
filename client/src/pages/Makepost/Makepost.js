import React, { Component } from "react";
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Footer from "../../components/Footer/Footer";
// import API from "../../utils/API";
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
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewPostsFormSubmit = this.handleNewPostsFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state.results);
    };

    handleNewPostsFormSubmit = (e) => {
        e.preventDefault();
        console.log("userId " + this.state.userId)
        // API Call goes here
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
                            <div className="formItem">
                                <Form.Control
                                    id="userId"
                                    onChange={this.handleInputChange}
                                    name="userId"
                                    type="text"
                                    value={this.state.userId}
                                    className="hiddenValue"
                                />
                            </div>
                            <div className="formItem">
                                <Form.Label
                                    className="formLabel">
                                    Categorey</Form.Label>
                                <Form.Control as="select"
                                    id="category"
                                    onChange={this.handleInputChange}
                                    name="category"
                                    type="text"
                                >
                                    <option defaultValue="food">Food</option>
                                    <option value="services">Services</option>
                                    <option value="handywork">Handywork</option>
                                    <option value="babysitting">Babysitting</option>
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
                                    <option defaultValue="stclair">St Clair Station</option>
                                    <option value="yandbloor">Yonge and Bloor</option>
                                    <option value="bathurst">Bathurst Station</option>
                                    <option value="coxwell">Coxwell Station</option>
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
