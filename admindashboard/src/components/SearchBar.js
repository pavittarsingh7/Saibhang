import React from "react";

export default function SearchBar() {
  var CardImg = "https://placehold.co/320x420";
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
                            <a className="dropdown-item" href="/">
                              Action
                            </a>
                            <a className="dropdown-item" href="/">
                              Another action
                            </a>
                            <a className="dropdown-item" href="/">
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
            <div className="row justify-content-center">
              <div class="col-12 d-md-none">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Show Filters
                </button>

                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by
                    default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>

              <div className="col-2 border border-dark rounded bg-dark-subtle">
                <div className="row p-2 fs-6">
                  <div class=" overflow-x-auto mb-3">
                    <div className="col-12 mb-2">
                      <input placeholder="cataory or Item" className="form-control" />
                    </div>
                    <div className="col-12 mb-2">
                      <div className="h6 text-bg-secondary rounded p-2">Price Range</div>
                      <label
                        for="customRange1"
                        className="form-label d-flex justify-content-between mb-0"
                      >
                        <p className="mb-0">$10</p> <p className="mb-0">$500</p>
                      </label>

                      <input type="range" className="form-range" id="customRange1"></input>
                    </div>

                    <div className="col-12 mb-2">
                      <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed h6 text-bg-secondary rounded p-2"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Credentials
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault0"
                                />
                                <label className="form-check-label" for="flexCheckDefault0">
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault1"
                                />
                                <label className="form-check-label" for="flexCheckDefault1">
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault2"
                                />
                                <label className="form-check-label" for="flexCheckDefault2">
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-2">
                      <div class="accordion accordion-flush" id="accordionFlushExample1">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed h6 text-bg-secondary rounded p-2"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne1"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne1"
                            >
                              Province
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne1"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample1"
                          >
                            <div class="accordion-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault0"
                                />
                                <label className="form-check-label" for="flexCheckDefault0">
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault1"
                                />
                                <label className="form-check-label" for="flexCheckDefault1">
                                  checkbox
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault2"
                                />
                                <label className="form-check-label" for="flexCheckDefault2">
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-2">
                      <div className="h6 text-bg-secondary rounded p-2">Intake</div>
                      <input type="date" className="form-control" />
                      <span className="d-flex justify-content-between">
                        <p className="mb-0">Start Date</p>
                        <p className="mb-0">End Date</p>
                      </span>

                      <input type="range" className="form-range" id="customRange1"></input>
                    </div>
                    <div className="col-12 mb-2">
                      <div className="h6 text-bg-secondary rounded p-2">Duration</div>
                      <span className="d-flex justify-content-between">
                        <p className="mb-0">6 months</p>
                        <p className="mb-0">6 years</p>
                      </span>
                      <input type="range" className="form-range" id="customRange1"></input>
                    </div>
                    <div className="col-12 mb-2">
                      <div className="h6 text-bg-secondary rounded p-2">Requirements</div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          All
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          IELTS
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option2"
                        />
                        <label class="form-check-label" for="exampleRadios3">
                          PTE
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          value="option3"
                          disabled
                        />
                        <label class="form-check-label" for="exampleRadios4">
                          Disabled option
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                {/* Result Card Start */}
                <div className="resultCard shadow-lg mb-2">
                  <div className="row g-0">
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                      <div className="">
                        <img
                          src={CardImg}
                          className="img-fluid rounded mx-auto d-block"
                          alt="cardImg"
                        />
                      </div>
                    </div>
                    <div className="col-md-8 px-2">
                      <div className="mt-2">
                        <div className="row">
                          <div className="col-2 rounded text-bg-secondary text-center">
                            <span className="fs-5">Rating 83%</span>
                          </div>
                          <div className="col-6">
                              <a className="h5 m-0 p-0 link-offset-3" href="/" >
                                University Transfer Program
                              </a>
                            
                            <div className="h6 m-0 p-0">ALEXANDER COLLEGE</div>
                          </div>
                          <div className="col-4 text-center">
                            Application Fee <strong className="fs-5">$500</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            Credential
                            <br /> Diploma
                          </div>
                          <div className="col">
                            Requirements <br /> IELTS overall 6.0, with no bands below 6.0,PTE
                            Academic overall 60,TOEFL overall 80
                          </div>
                          <div className="col">
                            Duration <br /> 3 years
                          </div>
                          <div className="col">Application Process <br /> 10-15days</div>
                          <div className="col">
                            PG Work Permit <br /> YES
                          </div>
                          <div className="col">
                            Website <br /> Go to Website{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1 border-top">
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-primary ms-5">Explore Webite</button>
                      <p className="ms-3 m-0 p-0">
                        <button className="btn btn-sm btn-outline-primary">Add to Compare</button>
                        <button className="btn btn-sm btn-primary ms-3">Select This Program</button>
                      </p>

                      <p className="pe-2 m-0 p-0  ">
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
