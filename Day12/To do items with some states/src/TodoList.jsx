import React from "react";
import "./TodoList.css";

const TodoList = ({ tasks }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <p>{task.name}</p>
            <span>{task.date}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
