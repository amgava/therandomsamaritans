import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ViewCard = (props) => {
  return (
    <div>
      <Card>

        <CardImg top width="100%" src="{prop.productImg}" alt="prod-img" />
        <CardBody>
          <CardTitle>View Result</CardTitle>
          <CardSubtitle>{props.productId}</CardSubtitle>
          <CardText>
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
          </CardText>
          <Button
          onClick="/store-to-database/">Save</Button>
          <Button>Cancel</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewCard;