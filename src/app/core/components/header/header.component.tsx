
import Login from "modules/auth/login/login.module";
import React from "react";
import { Link } from "react-router-dom";
import { headerlist } from "./header.data";
import styles from "./header.module.scss";
import { headerProps } from "./header.types";



export default function Header(props: headerProps) {
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-light`}>
        <div className="container">
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
          <div className={`collapse navbar-collapse ${styles["custom-nav"]}`} id="main_nav">
            <ul className="navbar-nav">
              {headerlist?.map((items: any, index: any) => {
                return (
                  <li className="nav-item fw-600 " key={index}>
                    <Link className={`nav-link color-title ${styles["custom-nav-link"]}`} to={items.to}>
                      {items.name}
                    </Link>
                  </li>
                )
              })}

            </ul>
            <button
              className="button-small"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`modal fade ${styles["custom-modal"]}`}
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className={`modal-content ${styles["login-modal-content"]} `}>
            <button
              type="button"
              className={`color-title ${styles["close-btn"]}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span>x</span>
            </button>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
