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
            results: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchPostsFormSubmit = this.handleSearchPostsFormSubmit.bind(this);
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state.results);
    };

    handleSearchPostsFormSubmit = (e) => {
        e.preventDefault();
        console.log("category " + this.state.category)
        this.newresults();
    };

    newresults = () => {
        let category = this.state.category;
        let location = this.state.location;
        API.getPosts(category, location)
            .then(res => this.setState({ results: [res.data] }))
            .catch(err => console.log(err));
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
                            >Categorey</Form.Label>
                            <Form.Control as="select" column
                                controlId="category"
                                onChange={this.handleInputChange}
                                name="category"
                                type="text"
                                id="category">
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
                            <Form.Control as="select" column
                                controlId="location"
                                onChange={this.handleInputChange}
                                name="location"
                                type="text"
                                id="location">
                                <option defaultValue="stclair">St Clair Station</option>
                                <option value="yandbloor">Yonge and Bloor</option>
                                <option value="bathurst">Bathurst Station</option>
                                <option value="coxwell">Coxwell Station</option>
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
                    <Searchresults />
                    {/* <img alt="placeholder" src={require('./placeholdersearchresults.png')} /> */}
                    <Footer />
                </div>
            </div>
        );
    }
}

