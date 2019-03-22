import React from "react";
import { Container } from "../Grid";
import Buybutton from "../Buybutton/Buybutton";
import { List, ListItem } from "../List";
import "./Mybuys.css";

const Mybuys = props => {
  console.log("this is mybuys props" + props);
    return (
      <Container id="myBuysBox">
        <span><h3 className="alert-primary p-2">Things I Am Buying</h3></span>
            {props.activebuys.length ? (
              <List>
                {props.activebuys.map(res => (
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

export default Mybuys;