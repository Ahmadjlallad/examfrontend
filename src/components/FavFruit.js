import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import UpdateForm from "./UpdateForm";
class FavFruit extends React.Component {
  state = { userFruit: [] };
  getUserFruits = () => {
    axios
      .get(
        `https://exambackend401ahmad.herokuapp.com/userFruit?email=${this.props.auth0.user.email}`
      )
      .then((respond) => {
        this.setState({ userFruit: respond.data });
      });
  };
  componentDidMount() {
    this.getUserFruits();
  }
  deleteFruit = (id) => {
    axios
      .delete(`https://exambackend401ahmad.herokuapp.com/userFruit/${id}`)
      .then(() => {
        this.getUserFruits();
      });
  };
  updateFruit = (id, updateSelectedFruit) => {
    axios
      .put(
        `https://exambackend401ahmad.herokuapp.com/userFruit/${id}`,
        updateSelectedFruit
      )
      .then(() => {
        this.getUserFruits();
      });
  };
  render() {
    return (
      <Container fluid className="md">
        <Row xs={3}>
          {this.state.userFruit.map((fruit) => {
            return (
              <Col key={fruit._id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={fruit.image} />
                  <Card.Body>
                    <Card.Title>Name: {fruit.name}</Card.Title>
                    <Card.Text>Price: {fruit.price}</Card.Text>
                    <Button
                      onClick={() => this.deleteFruit(fruit._id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                    <UpdateForm updateFruit={this.updateFruit} fruit={fruit} />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default withAuth0(FavFruit);
