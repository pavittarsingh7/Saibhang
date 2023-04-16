import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from "./components/Main";
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <div className="contianer bg-secondary-subtle">
        <div className="row">
          <div className="col-2">
           <Sidebar />
          </div>
          <div className="col-10">
            <TopBar />
            {/* outlet */}<Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
