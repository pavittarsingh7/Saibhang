import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import TopBar from "../components/TopBar";

export default function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <TopBar />
          {/* outlet */}
          <Main />
        </div>
      </div>
    </div>
  );
}
