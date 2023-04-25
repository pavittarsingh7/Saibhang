import React from "react";
import textIcon from "../assests/Group18527.png";
import flag from "../assests/CanadaFlag.png";
import demostudents from "../assests/demoStudents.png";
import globeInfo1 from "../assests/globeInfo1.png";

export default function Section1() {
  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-auto align-items-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 ">
                <div className="home-text">
                  Unlock Your Future,{" "}
                  <span class="position-relative" style={{ color: "#2e397e" }}>
                    Study Abroad
                    <span class="position-absolute top-0 start-0 translate-middle pt-2">
                      <span>
                        <img src={textIcon} alt="textIcon" />
                      </span>
                    </span>
                  </span>{" "}
                  and Gain a Global Perspective
                </div>
              </div>
              <div className="col-12">
                <div className="border rounded-pill p-1 shadow-sm order-1">
                  <div className="position-relative d-flex">
                    <img src={flag} alt="flag" className="rounded-circle me-1" width={"36px"} />

                    <select className="border-0 form-control w-25 formControl">
                      <option value="1">
                        <span className="me-3">Canada</span>
                      </option>
                      <option value="2">Austria</option>
                      <option value="3">India</option>
                    </select>
                    <span className="border broder-end mx-2"></span>
                    <input
                      type="text"
                      className="form-control border-0 me-2 formControl"
                      placeholder="Enter university or program"
                    />
                    <span className="top-50 end-0 position-absolute translate-middle-y">
                      <button className="btn btn-dark-blue rounded-pill px-4">
                        {"()"}
                        Search
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={demostudents} alt="demo students" />
          </div>
        </div>
      </div>
      <div className="btn-dark-blue p-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={globeInfo1} alt="globeInfo1" />{" "}
            </div>
            <div className="col">
              <img src={globeInfo1} alt="globeInfo1" />{" "}
            </div>
            <div className="col">
              <img src={globeInfo1} alt="globeInfo1" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
