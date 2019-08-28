import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  return (
    <div className="todo-list">
      {
        todosData.map( data => <TodoItem key={data.id} task={data} /> )
      }
    </div>
  );
}

export default App;
