import React from "react";
import Buybutton from "../Buybutton";
import { Container } from "../Grid";
import { List, ListItem } from "../List";

const Searchresults = props => {
    return (
      <span className="searchResultsBox">
      <Container fluid>
        <span><h2>Search Results:</h2></span>
            {props.results.length ? (
              <List>
                {props.results.map(res => (
                  <ListItem key={res._id}>
                  <List>
                    <li>
                      <strong>{res.description}</strong>
                      </li>
                      <li>
                      <strong>${res.price}</strong>
                      </li>
                      <li>
                      <strong>{res.contactNo}</strong>
                      </li>                
                      <li>
                      <strong>Expires: {res.expiryDate}</strong>
                      </li>
                      <li>
                      <Buybutton onClick={() => props.buyitem(res._id)} />
                      </li>
                      </List>
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

export default Searchresults;