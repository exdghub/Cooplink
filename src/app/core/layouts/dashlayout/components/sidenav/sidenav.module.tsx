import {
  faStar,
  faAngleDown,
  faAngleUp,
  faL,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SideNavProps } from "./sidenav.types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./sidenav.module.scss";
import Logo from "shared/components/logo/logo.component";

const SideNav = (props: SideNavProps) => {
  const { menu, openSideBar, onsideBarNav, toggleDropdown } = props;
  console.log("openSideBar", openSideBar);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div
      className={`d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100 custom-sidenav`}
    >
      <div className="d-flex align-items-center justify-content-between w-100 px-3 pb-3 mb-md-0 me-md-auto text-dark ">
        {openSideBar ? (
          <>
            <span className={`fs-5 ${styles["logo__sidenav"]}`}>
              <Logo />
            </span>
            <FontAwesomeIcon
              icon={faExpand}
              className={styles["hamburger"]}
              onClick={onsideBarNav}
            />
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faBars}
              className={`${styles["hamburger"]} pt-2`}
              onClick={onsideBarNav}
            />
          </>
        )}
      </div>

      <ul className="nav" id="menu">
        {menu?.map((item: any, index: any) => {
          return (
            <div key={index} className="w-100">
              {/* For single item  */}
              {item.type === "single" && (
                <li className="nav-item ">
                  <NavLink to={item.to} className={`${styles["side-nav"]}`}>
                    <div
                      className={`nav-link align-middle px-3 ${styles["side-nav-link"]} `}
                    >
                      <FontAwesomeIcon icon={item.img} />
                      <span className={`ms-2 d-sm-inline fw-600 `}>
                        {openSideBar ? item.name : ""}
                      </span>
                    </div>
                  </NavLink>
                </li>
              )}

              {/* For menu items */}
              {item.type === "nested" && (
                <div className="">
                  {openSideBar ? (
                    <li className="nav-item d-sm-block">
                      <div
                        className={`nav-link align-middle px-3 ${styles["side-nav-link"]}`}
                      >
                        <span className="ms-2 text-uppercase d-sm-inline fw-600 ">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  ) : (
                    ""
                  )}

                  {item.children.map((child: any, index: any) => {
                    return (
                      <div key={index}>
                        {/* No dropdowns */}
                        {child.type === "one" && (
                          <li className="nav-item">
                            <NavLink
                              to={child.to}
                              className={styles["side-nav"]}
                            >
                              <div
                                className={`nav-link align-middle px-3  ${
                                  openSideBar ? "d-flex align-items-center" : ""
                                } ${styles["side-nav-link"]}`}
                              >
                                <FontAwesomeIcon icon={child.img} />
                                <span className="ms-2 d-sm-inline fw-600 line-height-lg">
                                  {openSideBar ? child.name : ""}
                                </span>
                              </div>
                            </NavLink>
                          </li>
                        )}

                        {/* Has dropdowns */}
                        {child.type === "many" && (
                          <li>
                            {/* Dropdown parent */}
                            <a
                              href={`#${child.id}`}
                              data-bs-toggle={"collapse"}
                              className={`nav-link px-3 align-middle d-flex collapsed ${
                                openSideBar
                                  ? "justify-content-between "
                                  : "align-items-center"
                              } ${styles["side-nav-link"]}`}
                            >
                              <span className="pr-1">
                                <FontAwesomeIcon icon={child.img} />
                                {openSideBar ? (
                                  <span className="ms-2 d-sm-inline fw-600 ">
                                    {child.parent}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                              <span className={`mr-0 ${styles["arrow-icon"]}`}>
                                <FontAwesomeIcon icon={faAngleDown} />
                              </span>
                            </a>
                            {/* Dropdown items */}
                            <ul
                              className={`collapse nav flex-column ms-4 ${
                                openSideBar ? "" : `${styles["sidenav-menu"]}`
                              }`}
                              id={child.id}
                              data-bs-parent="#menu"
                            >
                              {child.subitems.map(
                                (subitem: any, index: any) => {
                                  return (
                                    <li className="w-100" key={index}>
                                      <NavLink
                                        to={`${subitem.to}`}
                                        className={styles["side-nav"]}
                                      >
                                        <div
                                          className={`nav-link pl-sm-1 d-flex align-items-center ${
                                            openSideBar
                                              ? "pl-md-4 "
                                              : "pl-md-1 "
                                          } ${styles["side-nav-link"]}`}
                                        >
                                          <FontAwesomeIcon icon={faStar} />
                                          {/* <img src={subitem.img} alt={subitem.name} /> */}
                                          <span className="ms-2 d-sm-inline fw-600">
                                            {openSideBar ? subitem.name : ""}
                                          </span>
                                        </div>
                                      </NavLink>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </li>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
