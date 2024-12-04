import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentItem = ({ student }) => {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {student.name}
      <button
        onClick={() => deleteStudent(student.id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default StudentItem;
