import React from "react";
import textIcon from "../assests/Group18527.png";
import flag from "../assests/CanadaFlag.png";

export default function Section1() {
  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-auto align-items-center">
          <div className="col-md-6">
            <div className="home-text">
              Unlock Your Future,{" "}
              <span class="position-relative" style={{ color: "#2e397e" }}>
                Study Abroad
                <span class="position-absolute top-0 start-0 translate-middle">
                  <span>
                    <img src={textIcon} alt="textIcon" />
                  </span>
                </span>
              </span>{" "}
              and Gain a Global Perspective
            </div>
            <div className="border rounded-pill p-2 shadow-sm">
              <div className="">
              <img src={flag} alt="flag" className="rounded-circle me-1" width={"32px"} />
                <select className="border-0">
                  <option value="1">
                    
                    <span className="me-3">Canada</span>
                  </option>
                  <option value="2">Austria</option>
                  <option value="3">India</option>
                </select>
                <input className="border-0" placeholder="Enter university or program" />
                <button className="btn btn-dark-blue rounded-pill">searcg</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">part-2</div>
        </div>
      </div>
    </>
  );
}
