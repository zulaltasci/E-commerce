import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid mt-5 "
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <footer className="py-5 p-5">
        <div className="row d-flex justify-content-evenly p-5">
          <div className="col-md-2 col-6">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Women
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Man
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Accessories
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-6">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Shipping & Returns
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Store Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  Payment Methods
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-black">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 offset-1">
            <form>
              <h6>Join our mailing list and get 10% off your purchase</h6>

              <div className="d-flex flex-column w-100 gap-2">
                <label className="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="text"
                  className="border border-dark text-black p-2"
                  placeholder="Enter your email here"
                  style={{ color: "black" }}
                />
                <button
                  className="btn btn-dark"
                  type="button"
                  style={{ borderRadius: "0px" }}
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#twitter" /> */}
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#instagram" /> */}
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#facebook" /> */}
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
