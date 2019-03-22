import React from "react";
import { Container } from "../Grid";
import { List, ListItem } from "../List";
import "./Mybuys.css";
const moment = require("moment");

const convertPhone = (rawPhone) => {
  var insert = "-";
  var result = [rawPhone.slice(0, 3), insert, rawPhone.slice(3, 6), insert, rawPhone.slice(6, 10)].join('');
  return result;
}

const Mybuys = props => {
  console.log("this is mybuys props" + props);
  return (
    <Container className="myBuysBox m-2">
      <span><h3 className="alert-primary p-3">Things I Am Buying</h3></span>
      {props.activebuys.length ? (
        <List>
          {props.activebuys.map(res => (
            <ListItem key={res._id}>
              <List>
                <li>
                  <strong className="postTitle">{res.description}</strong>
                </li>
                <li>
                  <strong>Expires: {moment(res.expiryDate).format('MMMM Do YYYY')}</strong>
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

export default Mybuys;