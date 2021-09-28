import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
class UpdateForm extends Component {
  state = { show: false };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    return (
      <>
        <Button variant="success" onClick={this.handleShow}>
          Update Fruit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Fruit Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.props.updateFruit(this.props.fruit._id, {
                  ...this.props.fruit,
                  name: e.target.name.value,
                  image: e.target.image.value,
                  price: e.target.price.value,
                });
                this.handleClose();
              }}
            >
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.fruit.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.fruit.image}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.fruit.price}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateForm;
