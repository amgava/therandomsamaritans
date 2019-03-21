import React from "react";
import "./Card.css";
import Location from "../Location";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body modal-card-body">
        <div className="card-text">
            <ul>
            <li>
                <strong>Category:</strong> {props.reqcategory}
            </li>
            <li>
                <strong>Location:</strong> {props.reqlocation}
            </li>
            <li>
                <strong>Description:</strong> {props.description}
            </li>
            <li>
              <strong>Contact Number:</strong> {props.reqcontactNo}
            </li>
            <li>
              <strong>Price:</strong> {props.reqprice}
            </li>
            <li className="hiddenClass">
              <strong>Expiry:</strong> {props.reqexpiryDate}
            </li>
            <li className="hiddenClass">
              <strong>User ID:</strong> {props.requserId}
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;