import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";
import TTCMap from "../TTCMap/TTCMap";

export default class CardForm extends Component {
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
            <Form>
                <FormGroup>
                    <Label for="category-in">Category</Label>
                    <Input type="select" name="category" id="category-in" onChange={this.handleInputChange}>
                        <option defaultValue="Select">Select</option>
                        <option defaultValue="Food">Food</option>
                        <option value="Services">Services</option>
                        <option value="Handywork">Handywork</option>
                        <option value="Babysitting">Babysitting</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="location-in">Select</Label>
                    <Input type="select" name="location" id="location-in" onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <TTCMap />
                </FormGroup>
                <FormGroup>
                    <Label for="description-in">Text Area</Label>
                    <Input type="textarea" name="description" id="description-in" onChange={this.handleInputChange}
                        value={this.description} />
                </FormGroup>
                <FormGroup>
                    <Label for="contact-no-in">Category</Label>
                    <Input type="text" name="phone" id="contact-no-in" onChange={this.handleInputChange}
                        value={this.contactNo} />
                </FormGroup>
                <FormGroup>
                    <Label for="price-in">Price</Label>
                    <Input type="text" name="price" id="price-in" onChange={this.handleInputChange}
                        value={this.price} />
                </FormGroup>
                <FormGroup>
                    <Label for="expiry-in">User ID</Label>
                    <Input type="text" name="expiry-in" id="expiry-in" onChange={this.handleInputChange}
                        value={this.expiryDate} />
                </FormGroup>
                <FormGroup>
                    <Label for="user-id-in">User ID</Label>
                    <Input type="text" name="user-id-in" id="user-id-in" />
                </FormGroup>
                <Button
                    className="submitNewPost"
                    onClick={this.handleNewPostsFormSubmit}
                >Submit New Post</Button>
            </Form>
        );
    }
}