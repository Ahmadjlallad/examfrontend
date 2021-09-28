import React, { Component } from "react";
import { Card } from "react-bootstrap";
import LoginButton from "./LoginButton";
export class LoginCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>Please login to your account to continue.</Card.Text>
          <LoginButton />
        </Card.Body>
      </Card>
    );
  }
}

export default LoginCard;
