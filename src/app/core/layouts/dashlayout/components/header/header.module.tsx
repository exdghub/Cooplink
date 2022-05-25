import { useAuth } from "core/utils/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import man from "assets/images/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashHeaderProps } from "./header.types";
import Logo from "shared/components/logo/logo.component";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const DashHeader = (props: DashHeaderProps) => {
  const { onSidebarNav, openSideBar } = props;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  // useEffect(() => {
  //   width < 820 && handleSideNavToggle();
  // },[width]);

  // function handleSideNavToggle() {
  //   console.log("toggle it");
  // }

  const auth = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-4">
     
      {width <821 &&(
        <FontAwesomeIcon
        icon={faBars}
        className="pr-2"
        role={"button"}
        onClick={onSidebarNav}
        />
      )}
      {/* {!openSideBar ? (
        <FontAwesomeIcon
          icon={faBars}
          className="pr-2"
          role={"button"}
          onClick={onSidebarNav}
        />
      ) : (
        ""
      )} */}

      {/* <DrawerMenu>
          children
        </DrawerMenu> */}

      <NavLink to="/dashboard" className="navbar-brand">
        {!openSideBar ? (
          <>
            <Logo /> | Infodevelopers{" "}
          </>
        ) : (
          "Infodevelopers"
        )}
      </NavLink>
      <div className="ml-auto d-flex align-items-center text-right">
        <span>
          <span className="text-capitalize secondary-text"> {auth.user}</span>{" "}
          <br />
          <span className="text-capitalize secondary-text font-weight-bold">
            {" "}
            Super Admin
          </span>
        </span>
        <img
          src={man}
          alt={auth.user}
          width="40"
          height="40"
          className="rounded-circle ml-3"
          style={{ objectFit: "cover" }}
        />
      </div>
    </nav>
  );
};

export default DashHeader;
