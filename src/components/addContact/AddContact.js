import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddContact extends Component {
  render() {
    return (
        <>
        <hr/>
      <Container>
        <h1 className="text-center">Add Contact Here</h1> 
        <hr/>
        <Form>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Enter Name :</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Enter Number :</Form.Label>
            <Form.Control type="phone" placeholder="Enter Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Enter @mail Id :</Form.Label>
            <Form.Control type="email" placeholder="Enter Mail" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button> 
          <Button className="mx-2" variant="danger" type="reset">
            Reset
          </Button>
        </Form>
      </Container>
      <hr/>
      </>
    );
  }
}
