import React, { Component } from 'react'
import Todo from "./Todo"

export default class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.list.map((elem, index) => {
                    return <Todo key={index} todo={elem} index={index} functionToEditTodo={this.props.functionToEditTodo} />
                })}
            </div>
        )
    }
}
