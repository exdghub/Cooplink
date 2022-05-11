import styles from "./landingPage.module.scss";

import HowItWorks from "./components/howItWorks/howItWorks.component";
import Home from "./components/home/home.component";
import Services from "./components/services/services.component";
import About from "./components/about/about.component";
import Login from "modules/auth/login/login.module";
import Footer from "core/components/footer/footer.component";
import { useEffect } from "react";
import { useState } from "react";

export default function LandingPageLayout() {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <nav
        id="landing-page-nav"
        className={`${
          navbar ? `navbar ${styles["color-change"]}` : "navbar"
        } navbar-light top fixed-top ${styles["custom-nav"]} `}
      >
        <div className="container">
          <div className="d-flex">
            <a className="navbar-brand" href="/">
              COOPLINK
            </a>
            {/* <button
              className="navbar-toggler d-flex d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div
              className={`nav nav-pills `}
              id="navbarSupportedContent"
            >
              <span className="px-2">
                <a className={`nav-link custom-navlink`} href="#homeScrollSpy">
                  Home
                </a>
              </span>
              <span className="px-2">
                <a
                  className={`nav-link custom-navlink`}
                  href="#serviceScrollSpy"
                >
                  Services
                </a>
              </span>
              <span className="px-2">
                <a className={`nav-link custom-navlink`} href="#aboutScrollSpy">
                  About us
                </a>
              </span>
              <span className="px-2">
                <a className={`nav-link custom-navlink`} href="#worksScrollSpy">
                  How it works
                </a>
              </span>
              <span className="px-2">
                <a className={`nav-link custom-navlink`} href="#aboutScrollSpy">
                  Network
                </a>
              </span>
            </div>
          </div>
          <div className={`d-flex`}>
            <button
              className={`button-small mx-2 text-uppercase ${styles["button-right"]}`}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div
        data-bs-spy="scroll"
        data-bs-target="#landing-page-nav"
        data-bs-offset="70"
        className="scrollspy-example"
        tabIndex={0}
      >
        <div id="homeScrollSpy" className="container">
          <Home />
        </div>

        <div id="serviceScrollSpy" className="container">
          <Services />
        </div>

        <div id="aboutScrollSpy" className="">
          <About />
        </div>

        <div id="worksScrollSpy" className="">
          <HowItWorks />
        </div>
      </div>
      <Footer />

      <div
        className={`modal fade ${styles["custom-modal"]}`}
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className={`modal-content ${styles["login-modal-content"]} `}>
            <button
              type="button"
              className={`color-title  ${styles["close-btn"]}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
