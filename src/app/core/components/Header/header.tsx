import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../../LoginModule/login.module";
import styles from "./header.module.scss";

interface headerProps {
  showModal?: Boolean;
}

export default function Header(props: headerProps) {
  const [navbar, setNavbar] = useState(false)

  const scrollNav = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    scrollNav()
    // adding the event when scroll change background
    window.addEventListener("scroll", scrollNav)
  })
  const headerlist = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Services",
      to: "/",
    },
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "How it works",
      to: "/",
    },
    {
      name: "Network",
      to: "/",
    },
  ];

  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-light ${navbar ? "navbar active" : "navbar"}` }>
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
                return(
                <li className="nav-item fw-600 ">
                  <Link className={`nav-link color-title ${styles["custom-nav-link"]}`} key={index} to={items.to}>
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
