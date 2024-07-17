import React from "react";
import Student from "./Student";

const Students = () => {
  const students = [
    {
      name: "Creshell ",
      department: "Science",
      finalGrade: 85,
      status: "Pass",
    },
    { name: "Berna", department: "Arts", finalGrade: 78, status: "Pass" },
    { name: "Rico", department: "Commerce", finalGrade: 90, status: "Pass" },
    {
      name: "Maria Ana",
      department: "Science",
      finalGrade: 92,
      status: "Pass",
    },
    { name: "Ryan", department: "Arts", finalGrade: 88, status: "Pass" },
    { name: "Gian", department: "Commerce", finalGrade: 82, status: "Pass" },
    { name: "Ernest", department: "Science", finalGrade: 95, status: "Pass" },
    { name: "Joy", department: "Arts", finalGrade: 60, status: "Pass" },
    { name: "Jhanline", department: "Commerce", status: "Fail" },
    { name: "Mark", department: "Science", status: "Fail" },
  ];

  return (
    <div>
      <h1>Student Records</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} index={index} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
