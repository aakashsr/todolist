import React from "react";

const TodoItem = ({ item, handleConformation }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        onChange={handleConformation}
        type="checkbox"
        checked={item.completed}
      />
      <p style={item.completed ? completedStyle : null}>{item.text}</p>
    </div>
  );
};

export default TodoItem;
