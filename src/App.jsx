// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard.jsx";
import Students from "./pages/Students";
// import Reports from "./pages/Reports"; // example extra page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
         <Route path="/Students" element={<Students/>}/>
      </Routes>
    </Router>
  );
}

export default App;
