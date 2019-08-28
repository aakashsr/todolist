import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {

  constructor(){
    super()
    this.state={
      todos:todosData
    }
  }
  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map(data => (
          <TodoItem key={data.id} task={data} />
        ))}
      </div>
    );
  }
}

export default App;
