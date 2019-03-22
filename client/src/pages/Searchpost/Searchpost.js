import React, { Component } from "react";
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Searchresults from "../../components/Seachresults/Searchresults";
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Searchpost.css";

export default class Searchpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            location: "",
            currentUser: "",
            results: [],
           // TempResults: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchPostsFormSubmit = this.handleSearchPostsFormSubmit.bind(this);
        this.getResults = this.getResults.bind(this);
       // this.buyItem = this.buyItem.bind(this);
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
    };

    handleSearchPostsFormSubmit = (e) => {
        e.preventDefault();
        console.log("Entered handleSearchPostsFormSubmit");
        const category = this.state.category;
        const location = this.state.location;
        const User = this.state.currentUser;
        const UserId = User;
        console.log(category);
        console.log(location);
        console.log(UserId);
        this.getResults(category, location, UserId);
    };

    getResults = (category, location, UserId) => {
        console.log(category);
        console.log(location);
        let getPost = {
            category: category,
            location: location,
            User: UserId

        }
        API.getPosts(getPost)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
           
    };

    buyItem = (id) => {
        console.log(id);
        let user = this.state.currentUser;
        const buyerUpdate = {
            postId : id,
            buyerId : user
        }
         API.buyPost(buyerUpdate)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="wrapper">
                <header className="App-header">
                    <Pageswitch />
                    <Form className="searchInputForm">
                        <div className="formItem">
                            <Form.Label
                                className="formLabel"
                            >Category</Form.Label>
                            <Form.Control as="select"
                                onChange={this.handleInputChange}
                                name="category"
                                type="text"
                                id="category">
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
                                onChange={this.handleInputChange}
                                name="location"
                                type="text"
                                id="location">
                                <option defaultValue="Select">Select</option>
                                <option defaultValue="St Clair Station">St Clair Station</option>
                                <option value="Yonge and Bloor">Yonge and Bloor</option>
                                <option value="Bathurst Station">Bathurst Station</option>
                                <option value="Coxwell Station">Coxwell Station</option>
                            </Form.Control>
                        </div>
                        <div className="formItem">
                            <Button variant="primary" className="searchSubmit"
                                onClick={this.handleSearchPostsFormSubmit} >
                                Submit Search
                            </Button>
                        </div>
                    </Form>
                </header>
                <div className="App-body searchResultsBody">
                    <Searchresults results={this.state.results} buyItem={this.buyItem} />
                </div>
                <Footer />
            </div>
        );
    }
}

