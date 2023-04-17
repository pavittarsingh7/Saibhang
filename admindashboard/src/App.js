import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./layout/Dashboard";
import LandingPage from "./layout/LandingPage";

function App() {
  return (
    <>
      <div className="contianer">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
