import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app-container">
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
