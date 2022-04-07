import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">D:Club</a>
                    </li>
                    <li>
                      <a href="#">D:Travels</a>
                    </li>
                    <li>
                      <a href="#">D:Construction</a>
                    </li>
                    <li>
                      <a href="#">D:Fashion</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">Donation</a>
                    </li>
                    <li>
                      <a href="#">Gift To Children</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/aftab__divan/"
                        target="_thapa">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                      href="https://www.youtube.com/c/AftabDivan" 
                      target="aftab">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
            {/* <hr /> */}
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Divan's. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;