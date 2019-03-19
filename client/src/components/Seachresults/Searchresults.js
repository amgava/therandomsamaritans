import React from "react";
import API from "../../utils/API";
import Buybutton from "../Buybutton";
import { Container } from "../Grid";
import { List, ListItem } from "../List";

export default class Searchresults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          results: []
        };
    };
    
  // componentDidMount() {
  //   this.loadItems();
  // }

  loadItems = () => {
    console.log(this.state.results);
    API.getPosts()
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
      <span className="searchResultsBox">
      <Container fluid>
        <span><h2>Search Results: </h2></span>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(res => (
                  <ListItem key={res.data._id}>
                    <a href={"api/users" + res.data._id}>
                      <strong>
                       Id#  {res.data._id} who is {res.data.firstName}
                      </strong>
                    </a>
                    <Buybutton onClick={() => this.buyItem(res.data._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
      </span>
    );
  }
}