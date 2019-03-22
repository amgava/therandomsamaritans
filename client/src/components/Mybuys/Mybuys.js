import React from "react";
import { Container } from "../Grid";
import Buybutton from "../Buybutton/Buybutton";
import { List, ListItem } from "../List";
import "./Mybuys.css";

const Mybuys = props => {
  console.log("this is mybuys props" + props);
    return (
      <Container className="myBuysBox m-2">
        <span><h3 className="alert-primary p-3">Things I Am Buying</h3></span>
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
              <h3 className="m-2 p-2">No Results to Display</h3>
            )}
      </Container>
    );
  }

export default Mybuys;