import React from "react";
import { Container } from "../Grid";
import Buybutton from "../Buybutton/Buybutton";
import { List, ListItem } from "../List";
import "./Myposts.css";

const Myposts = props => {
  console.log("this is myposts props" + props);
    return (
      <Container id="myPostsBox">
        <span><h3 className="alert-primary p-2">Things I Am Selling</h3></span>
            {props.activeposts.length ? (
              <List>
                {props.activeposts.map(res => (
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
    );
  }

export default Myposts;