import React, { Component } from 'react'
// import Button from "react-bootstrap/Button";

import TodoList from "./TodoList";
import AddForm from "./AddForm"

import Jumbotron from "react-bootstrap/Jumbotron";

export default class MyJumbotron extends Component {

    render() {
        return (
          <div>
            <Jumbotron>
              <h1>My TODO List</h1>
              <TodoList list={this.props.list} functionToEditTodo={this.props.functionToEditTodo} />
              <AddForm functionToAddTodo={this.props.functionToAddTodo} />
            </Jumbotron>
          </div>
        );
    }
}


