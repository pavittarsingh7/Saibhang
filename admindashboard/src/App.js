import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./layout/Dashboard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="contianer bg-secondary-subtle">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
