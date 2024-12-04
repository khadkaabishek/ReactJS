import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <div>
      {students.length === 0 ? (
        <p className="text-muted text-center">
          No students available. Please add some!
        </p>
      ) : (
        <ul className="list-group">
          {students.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default StudentList;
