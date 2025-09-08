
import React, { useState } from "react";

const StudentTable = ({ students }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });


  const sortedStudents = [...students].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-lg font-bold mb-4 text-blue-500 ">Student List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-blue-900">
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("subject")}
            >
              Subject
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("grade")}
            >
              Grade
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => handleSort("score")}
            >
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.id} className="border-t hover:bg-gray-50 text-blue-500">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.subject}</td>
              <td className="p-2">{student.grade}</td>
              <td className="p-2">{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
