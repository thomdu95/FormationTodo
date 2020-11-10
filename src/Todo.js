import React, { Component } from 'react'
import Card from "react-bootstrap/Card"

export default class Todo extends Component {
    callEditTodo = () => {
        this.props.functionToEditTodo(this.props.index)
    }

    render() {
        return (
          <div>
            <Card
              bg={this.props.todo.todo ? "secondary" : "success"}
            >
              <Card.Header onClick={this.callEditTodo}>{this.props.todo.todo ? "TODO" : "DONE"}</Card.Header>
              <Card.Body>
                <Card.Title>{this.props.todo.name} </Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
    }
}
