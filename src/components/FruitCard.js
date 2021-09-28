import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class FruitCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} key={this.props.fruit.name}>
        <Card.Img variant="top" src={this.props.fruit.image} />
        <Card.Body>
          <Card.Title>Name: {this.props.fruit.name}</Card.Title>
          <Card.Text>Price: {this.props.fruit.price}</Card.Text>
          <Button
            onClick={() =>
              this.props.addFruit({
                ...this.props.fruit,
                email: this.props.email,
              })
            }
            variant="success"
          >
            Add to Fav
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default FruitCard;
