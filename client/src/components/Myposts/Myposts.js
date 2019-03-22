import React from "react";
import { Container } from "../Grid";
import { List, ListItem } from "../List";
import "./Myposts.css";

const Myposts = props => {
  return (
    <Container className="myPostsBox m-2">
      <span><h3 className="alert-primary p-3">Things I Am Selling</h3></span>
      {props.activeposts.length ? (
        <List>
          {props.activeposts.map(res => (
            <ListItem key={res._id}>
              <List>
                <li>
                  <strong>{res.description}</strong>
                </li>
                <li>
                  <strong>Expires: {res.expiryDate}</strong>
                </li>
              </List>
            </ListItem>
          ))}
        </List>
      ) : (
          <h3 className="m-2 p-2">No Results to Display</h3>
        )}
    </Container>
  );
}

export default Myposts;