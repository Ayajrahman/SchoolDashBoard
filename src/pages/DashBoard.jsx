
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import StudentTable from "../components/StudentTable";
import PerformanceChart from "../components/PerformanceChart";
import studentsData from "../assets/students.json";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");


  useEffect(() => {
    setStudents(studentsData);
    setFilteredStudents(studentsData);
  }, []);

  useEffect(() => {
    let data = [...students];

    if (selectedGrade !== "All") {
      data = data.filter((s) => s.grade === selectedGrade);
    }

    if (selectedSubject !== "All") {
      data = data.filter((s) => s.subject === selectedSubject);
    }

    if (searchTerm.trim() !== "") {
      data = data.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStudents(data);
  }, [searchTerm, selectedGrade, selectedSubject, students]);

  return (
    <div className="flex h-screen bg-gray-100 font-serif">

      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 flex flex-wrap items-center justify-between gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="flex gap-4">
            <FilterDropdown
              label="Grade"
              options={["All", "A", "B", "C", "D"]}
              selected={selectedGrade}
              setSelected={setSelectedGrade}
            />
            <FilterDropdown
              label="Subject" 
              options={["All", "Mathematics", "Science", "English", "History","Social"]}
              selected={selectedSubject}
              setSelected={setSelectedSubject}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          <StudentTable students={filteredStudents} />
          <PerformanceChart students={filteredStudents} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
