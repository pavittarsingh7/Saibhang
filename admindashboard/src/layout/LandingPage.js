import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

export default function LandingPage() {
  return (
    <div className="vh-100 bg-secondary-subtle">
      <NavBar />
      <SearchBar />
    </div>
  );
}
