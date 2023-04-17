import React from "react";

export default function SearchBar() {
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
                    <i class="bi bi-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="mt-2">
            <div className="row">
              <div className="offset-1 col-3">Serach options</div>
              <div className="col-7">
                <div class="card">
                  <div class="row g-0">
                    <div class="col-md-4 col-sm-12">
                      <img
                        src="../assets/activeLinkBG.png"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="card-header">Featured</div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p>sadfsaf</p>
                  </div>
                  <div class="card-footer">Footer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
