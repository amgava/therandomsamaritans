import React from "react";
import { Container } from "../Grid";
import Buybutton from "../Buybutton/Buybutton";
import { List, ListItem } from "../List";

const Myposts = props => {
  console.log("this is myposts props" + props);
    return (
      <span className="myPostsBox">
      <Container fluid>
        <span><h2>Active Posts:</h2></span>
            {props.myposts.length ? (
              <List>
                {props.myposts.map(res => (
                  <ListItem key={res._id}>
                      <strong>{res.description}</strong>
                    <Buybutton onClick={() => props.buyitem(res._id)} />
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

export default Myposts;