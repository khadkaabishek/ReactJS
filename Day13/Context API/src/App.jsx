import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import StudentProvider from "./context/StudentContext";

const App = () => {
  return (
    <StudentProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Student Management App</h1>
        <AddStudent />
        <StudentList />
      </div>
    </StudentProvider>
  );
};

export default App;
