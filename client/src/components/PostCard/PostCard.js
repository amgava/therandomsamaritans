import React from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import CardForm from "../CardForm/CardForm";

const PostCard = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Create New Post</CardTitle>
          <CardText>
              <CardForm />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostCard;