import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange = id =>
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todos.map(item => {
  //       if (item.id === id) {
  //         item.completed = !item.completed;
  //       }
  //       return item;
  //     });

  //     return {
  //       todos: updatedTodos
  //     };
  //   });

  handleChange = id =>
    this.setState({
      todos: this.state.todos.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleConformation={() => this.handleChange(item.id)}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
