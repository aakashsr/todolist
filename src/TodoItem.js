import React from "react";

const TodoItem = ({item,handleConformation}) => {
  return (
    <div className="todo-item">
      <input onChange={handleConformation} type="checkbox" checked={item.completed}/>
      <p>{item.text}</p>
    </div>
  );
}

export default TodoItem;
