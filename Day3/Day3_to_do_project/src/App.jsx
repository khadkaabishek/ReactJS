import AppName from "./components/appName";
import Add_To_DO from "./components/Add_To_DO";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import "./app.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <Add_To_DO />
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
