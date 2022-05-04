import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../../LoginModule/login.module";
import styles from "./header.module.scss";

interface headerProps {
  showModal?: Boolean;
}

export default function Header(props: headerProps) {
  const { showModal } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
    console.log(setShow(show));

    const modalElem: any = document.getElementById("bd-example-modal-lg");
    modalElem?.modal("show");
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            COOPLINK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className={`modal-content ${styles["login-modal-content"]} `}>
            <button
              type="button"
              className={`btn-close ${styles["close-btn"]}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <Login/>
          </div>
        </div>
      </div>
    </>
  );
}
