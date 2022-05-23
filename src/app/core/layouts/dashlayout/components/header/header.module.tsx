import { useAuth } from "core/utils/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import man from "assets/images/man.jpg";

const DashHeader = () => {
  const auth = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 px-5">
      <NavLink to="/dashboard" className="navbar-brand">
        Infodevelopers
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
