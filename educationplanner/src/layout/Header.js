import React from "react";
import logo from "./../logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg shadow-sm fixed-top">
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
                <li className="nav-item HomeNavLink me-md-5">
                  <a className="nav-link" href="/">
                    Leads
                  </a>
                </li>
              </ul>

              <div class="dropdown">
                <button
                  type="button"
                  class="btn btn-dark-blue rounded-pill px-5 py-3 me-5 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Login
                </button>
                <form class="dropdown-menu p-2">
                  <div class="mb-3">
                    <label for="exampleDropdownFormEmail2" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleDropdownFormEmail2"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleDropdownFormPassword2" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleDropdownFormPassword2"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                      <label class="form-check-label" for="dropdownCheck2">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-dark-blue rounded">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
