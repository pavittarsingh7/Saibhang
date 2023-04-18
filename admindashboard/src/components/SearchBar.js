import React from "react";

export default function SearchBar() {
  var CardImg = "https://placehold.co/600x400";
  return (
    <>
      <div>
        <div className="container-fluid mt-4">
          <form className="text-center">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-10 col-12">
                <div className="position-relative">
                  <input type="text" className="form-control searchbar" placeholder="Search" />
                  <span className="top-50 end-0 position-absolute translate-middle-y me-2">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="mt-2">
            <div className="row">
              <div className="offset-1 col-3">Serach options</div>
              <div className="col-7">
                <div className="card">
                  <div className="row g-0">
                    <div className="card-header">Header</div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                      <div className="p-2">
                        <img
                          src={CardImg}
                          className="img-fluid rounded mx-auto d-block"
                          alt="cardImg"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    Footer
                    <p className="card-text float-end">
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
