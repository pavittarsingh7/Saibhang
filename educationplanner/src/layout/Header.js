import React from "react";
import logo from "./../logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm fixed-top">
          <div className="container-fluid mx-md-5 px-md-5">
            <a class="navbar-brand ms-md-5" href="/">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item HomeNavLink me-md-5">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item HomeNavLink me-md-5">
                  <a className="nav-link" href="/">
                    Agent
                  </a>
                </li>
                <li className="nav-item HomeNavLink me-md-5">
                  <a className="nav-link" href="/">
                    Partner
                  </a>
                </li>
                <li className="nav-item HomeNavLink me-md-5">
                  <a className="nav-link" href="/">
                    Institutions
                  </a>
                </li>
              </ul>
              <button className="btn btn-dark-blue rounded-pill px-5 py-2 me-5" type="submit">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
