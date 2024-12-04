import React, { createContext, useState } from "react";


export const StudentContext = createContext();


const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);


  const addStudent = (name) => {
    const newStudent = { id: Date.now(), name };
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

 
  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
