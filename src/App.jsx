// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
// import Reports from "./pages/Reports"; // example extra page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/Students" element={<Students/>}/>
      </Routes>
    </Router>
  );
}

export default App;
