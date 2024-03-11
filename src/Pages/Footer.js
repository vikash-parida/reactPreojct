import React from "react";
import Mitra_Logo from "../Images/Mitra_Logo.jpg";
// import '../Styles/Styles.css'

function Footer() {
  return (
    <div>
      <hr />
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Products
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Downloads
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Brands</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Uras Techno
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Nippon Magnetics
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Exen Corporation
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Profile</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Vision
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Mission
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About Mitra
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Join Concrete Mitra</h5>
                <p>For More Details Drop Your Mail Here</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Join Us
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between py-4 my-4 border-top">
            <img src={Mitra_Logo} width={250} />

            <p>© 2018 Company, Inc. All rights reserved.</p>

            <ul className="list-unstyled d-flex justify-content-between fs-3">
              <li className="ms-3">
                <a
                  href="https://github.com/sanketbodke"
                  className="link-dark"
                  target="blank"
                >
                  <i className="bi fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://www.instagram.com/imsanketbodke/"
                  target="blank"
                >
                  <i className="bi fab fa-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/sanket-bodake-995b5b205/"
                  target="blank"
                >
                  <i className="bi fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="https://codepen.io/sanketbodke">
                <i className="fab fa-skype"></i>                
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
