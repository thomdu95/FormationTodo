import React from "react"
import './App.css';
import MyJumbotron from "./MyJumbotron";

class App extends React.Component {
  state = {
    todoList: [
      { name: "Faire un cours React", todo: true },
      { name: "Faire à Manger", todo: true },
      { name: "Finir le projet en cours", todo: true },
      { name: "Prendre du repos", todo: true },
    ],
  };

  addTodo = (todoToAdd) => {
    // console.log(todoToAdd)
    this.setState({
      todoList: [
        ...this.state.todoList,
        { name: todoToAdd, todo: true}
      ]
    })
  }

  editTodo = (index) => {
    this.setState({
      todoList: [
        ...this.state.todoList.slice(0, index),
        {
          name: this.state.todoList[index].name,
          todo: !this.state.todoList[index].todo,
        },
        ...this.state.todoList.slice(index + 1, this.state.todoList.length),
      ],
    });
    console.log("APP => ", index)
  }

  render() {
    // console.log(this.state.todoList)
    return (
      <div className="App">
        <MyJumbotron list={this.state.todoList} functionToAddTodo={this.addTodo} functionToEditTodo={this.editTodo}/>
      </div>
    );
  }
}

export default App;
