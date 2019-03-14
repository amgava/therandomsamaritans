import React, { Component } from "react";
import Pageswitch from "../../components/Pageswitch/Pageswitch";
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
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
                    <form className="search-post-form">
                        <div className="search-post-form-input">
                            <strong>Search Controls</strong>
                            <br />
                            <select
                                onChange={this.handleInputChange}
                                name="category"
                                type="text"
                                className="form-control"
                                placeholder="category"
                                id="category">
                                <option value="food">Food</option>
                                <option value="services">Services</option>
                                <option defaultValue="handywork">Handywork</option>
                                <option value="babysitting">Babysitting</option>
                            </select>
                            <select
                                onChange={this.handleInputChange}
                                name="location"
                                type="text"
                                className="form-control"
                                placeholder="location"
                                id="location">
                                <option value="stclair">St Clair Station</option>
                                <option value="yandbloor">Yonge and Bloor</option>
                                <option defaultValue="bathurst">Bathurst Station</option>
                                <option value="coxwell">Coxwell Station</option>
                            </select>
                            <button onClick={this.handleSearchPostsFormSubmit} className="submitButton">
                                Search Stuff
                            </button>
                        </div>
                    </form>
                </header>
                <div className="App-body">
                    <p>Search Results Go Here</p>
                    <Footer />
                </div>
            </div>
        );
    }
}

