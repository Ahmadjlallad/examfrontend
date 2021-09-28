import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import FruitCard from "./FruitCard";
import { withAuth0 } from "@auth0/auth0-react";

class Home extends React.Component {
  state = {
    allFruits: [],
  };
  componentDidMount() {
    axios
      .get(`https://exambackend401ahmad.herokuapp.com/fruit`)
      .then((responds) => this.setState({ allFruits: responds.data.fruits }));
  }
  addFruit = (selectedFruit) => {
    axios.post(
      `https://exambackend401ahmad.herokuapp.com/userFruit`,
      selectedFruit
    );
  };
  render() {
    return (
      <Container fluid className="md">
        <Row xs={3}>
          {this.state.allFruits.length > 0
            ? this.state.allFruits.map((fruit) => (
                <Col key={fruit._id}>
                  <FruitCard
                    addFruit={this.addFruit}
                    fruit={fruit}
                    email={this.props.auth0.user.email}
                  />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    );
  }
}

export default withAuth0(Home);
