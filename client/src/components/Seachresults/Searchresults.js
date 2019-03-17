import React from "react";
// import API from "../../utils/API";
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
    
  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    console.log(this.state.results);
    // API.getBooks()
    //   .then(res => this.setState({ results: res.data }))
    //   .catch(err => console.log(err));
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
        <span><h2>Current Items</h2></span>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(item => (
                  <ListItem key={item._id}>
                    <a href={"/books" + item._id}>
                      <strong>
                        {item.title} by {item.author}
                      </strong>
                    </a>
                    <Buybutton onClick={() => this.buyItem(item._id)} />
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