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
            results: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchPostsFormSubmit = this.handleSearchPostsFormSubmit.bind(this);
        this.getResults = this.getResults.bind(this);
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

    handleSearchPostsFormSubmit = (e) => {
        e.preventDefault();
        console.log("Entered handleSearchPostsFormSubmit");
        // console.log("location" + this.state.location);
        const category = this.state.category;
        const location = this.state.location;
        console.log(category);
        console.log(location);
        this.getResults(category, location);
    };

    getResults = (category, location) => {
        console.log(category);
        console.log(location);
        let getPost = {
            category: category,
            location: location
        }
        API.getPosts(getPost)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    };

    buyItem = (id) => {
        console.log(id);
        // API.deleteBook(id)
        //   .then(res => this.setState({ results: res.data }))
        //   .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="wrapper">
                <header className="App-header">
                    <Pageswitch />
                </header>
                <div className="App-body">
                    <Form>
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
                            <Button variant="primary"
                                onClick={this.handleSearchPostsFormSubmit} >
                                Search Stuff
                            </Button>
                        </div>
                    </Form>
                    <br />
                    <hr className="pageSplit" />
                    <br />
                    <p>Search Results Go Here</p>
                    <Searchresults results={this.state.results} buyitem={this.buyItem} />
                    <Footer />
                </div>
            </div>
        );
    }
}

