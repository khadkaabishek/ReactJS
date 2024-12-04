import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

const AddStudent = () => {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addStudent(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddStudent;
