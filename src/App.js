import React, { Component } from 'react';
import ToDos from "./ToDos";
import AddForm from "./AddForm";


class App extends Component {
  state ={
    todos: [
      {id: 1, content: "pet the cat"},
      {id: 2, content: "enjoy good vibes"}
    ]
  }

  deleteTodo =(id) => {
    let todosClear = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todosClear
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To Dos</h1>
        <label>Click on the tasks when complete:</label>
        <ToDos todos={this.state.todos} deleteTodo ={this.deleteTodo}/>
        <AddForm addTodo ={this.addTodo}/>
      </div>
    );
  }
}

export default App;
