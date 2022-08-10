import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddContact extends Component {
  state = {
    
    name: " ",
    phone: " ",
    email: " ",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === " " ||
      this.state.phone === " " ||
      this.state.email === " "
    ) {
      alert("Please fill all the fields");
    } else {
      this.props.addContactHandler(this.state)
      this.setState({ name: " ", phone: " ", email: " " });
      console.log(this.state);
    }
  };

  render(props) {
    return (
      <>
        <Container>
          <h3 className="text-center">Add Contact Here</h3>
          <hr />
          <Form onSubmit={this.add}>
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Enter Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Enter Number :</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter Number"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Enter @mail Id :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Mail"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
            <Button className="mx-2" variant="danger" type="reset">
              Reset
            </Button>
          </Form>
        </Container>
        <hr />
      </>
    );
  }
}
