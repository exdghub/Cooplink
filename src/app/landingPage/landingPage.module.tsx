import styles from "./landingPage.module.scss";
import Home from "./homeComponent/home.component";
import Login from "../loginModule/login.module";
import Services from "./servicesComponent/services.component";
import About from "./aboutComponent/about.component";
import Footer from "../core/components/Footer/footer";
import HowItWorks from "./howItWorksComponent/howItWorks.component";

export default function LandingPageLayout() {
  return (
    <>
      <nav
        id="landing-page-nav"
        className={`navbar navbar-light bg-white top fixed-top container d-flex justify-content-space-between ${styles["custom-nav"]}`}
      >
        <div className="d-flex">
          <a className="navbar-brand" href="/">
            COOPLINK
          </a>
          <div className={`nav nav-pills`}>
            <span className="px-2">
              <a className={`nav-link custom-navlink`} href="#homeScrollSpy">
                Home
              </a>
            </span>
            <span className="px-2">
              <a className={`nav-link custom-navlink`} href="#serviceScrollSpy">
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
