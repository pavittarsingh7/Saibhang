import React from "react";

export default function SearchBar() {
  var CardImg = "https://placehold.co/220x220";
  return (
    <>
      <div>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-12">
              <form className="text-center">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-8 col-sm-10 col-12">
                    <div className="position-relative">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Dropdown button
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control searchbar"
                          placeholder="Search"
                        />
                      </div>
                      <span className="top-50 end-0 position-absolute translate-middle-y me-2">
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-2">
            <div className="row">
              <div className="offset-1 col-2">
                <div className="row fs-5">
                  <div className="col-12">
                    <input placeholder="cataory or Item" />
                  </div>
                  <div className="col-12">
                    <label for="customRange1" className="form-label d-flex">
                      Price Range from <p>$10</p> to <p>$500</p>
                    </label>

                    <input type="range" className="form-range" id="customRange1"></input>
                  </div>

                  <div className="col-12 text-bg-secondary rounded">
                    <div className="h6">Category</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        checkbox
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        checkbox
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        checkbox
                      </label>
                    </div>
                  </div>

                  <div className="col-12 text-bg-secondary rounded">
                    <div className="h6">Duration</div>
                  </div>
                  <div className="col-12">
                  <input type="date" />
                    <span className="d-flex justify-content-between"><p>Start Date</p><p>End Date</p></span>
                    <input type="range" className="form-range" id="customRange1"></input>
                  </div>
                </div>
              </div>
              <div className="col-7">
                {/* Result Card Start */}
                <div className="resultCard shadow-lg mb-2">
                  <div className="row g-0">
                    <div className="col-12 text-center p-1 border-bottom">Header</div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                      <div className="p-2">
                        <img
                          src={CardImg}
                          className="img-fluid rounded mx-auto d-block"
                          alt="cardImg"
                        />
                      </div>
                    </div>
                    <div className="col-md-8 px-2">
                      <div className="">
                        <div className="h5">Title</div>
                        <p className="text-justify">
                          This is the result card for single item. This is the result card for
                          single item.This is the result card for single item. This is the result
                          card for single item. This is the result card for single item. This is the
                          result card for single item. This is the result card for single item. This
                          is the result card for single item.This is the result card for single
                          item. This is the result card for single item. This is the result card for
                          single item. This is the result card for single item. This is the result
                          card for single item. This is the result card for single item.This is the
                          result card for single item. This is the result card for single item. This
                          is the result card for single item. This is the result card for single
                          item.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-1 border-top">
                    <div className="d-flex justify-content-between">
                      <p className="ps-2">Footer</p>
                      <p className="pe-2">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Result Card End */}

                {/* Result Card Start */}
                <div className="resultCard shadow-lg mb-2">
                  <div className="row g-0">
                    <div className="col-12 text-center p-1 border-bottom">Header</div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                      <div className="p-2">
                        <img
                          src={CardImg}
                          className="img-fluid rounded mx-auto d-block"
                          alt="cardImg"
                        />
                      </div>
                    </div>
                    <div className="col-md-8 px-2">
                      <div className="">
                        <div className="h5">Title</div>
                        <p className="text-justify">
                          This is the result card for single item. This is the result card for
                          single item.This is the result card for single item. This is the result
                          card for single item. This is the result card for single item. This is the
                          result card for single item. This is the result card for single item. This
                          is the result card for single item.This is the result card for single
                          item. This is the result card for single item. This is the result card for
                          single item. This is the result card for single item. This is the result
                          card for single item. This is the result card for single item.This is the
                          result card for single item. This is the result card for single item. This
                          is the result card for single item. This is the result card for single
                          item.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-1 border-top">
                    <div className="d-flex justify-content-between">
                      <p className="ps-2">Footer</p>
                      <p className="pe-2">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Result Card End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
