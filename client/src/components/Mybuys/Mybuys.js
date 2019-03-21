import React from "react";
import { Container } from "../Grid";
import Buybutton from "../Buybutton/Buybutton";
import { List, ListItem } from "../List";

const Mybuys = props => {
  console.log("this is mybuys props" + props);
    return (
      <span className="myBuysBox">
      <Container fluid>
        <span><h2>My Current Purchases:</h2></span>
            {props.mybuys.length ? (
              <List>
                {props.mybuys.map(res => (
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

export default Mybuys;