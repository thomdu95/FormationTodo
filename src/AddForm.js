import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AddForm extends Component {
    submited = (e) => {
        e.preventDefault()
        // console.log(e.target.newTodo.value)
        this.props.functionToAddTodo(e.target.newTodo.value);
    }
    render() {
        return (
          <div>
            <Form onSubmit={this.submited.bind(this)}>
              <Form.Group controlId="newTodo">
                <Form.Label>Todo Name</Form.Label>
                <Form.Control type="text" placeholder="Enter task" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        );
    }
}
