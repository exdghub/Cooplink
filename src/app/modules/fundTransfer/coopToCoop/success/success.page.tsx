import React from "react";
import success from "assets/images/svg/success.svg";
import { useBreadcrumbs } from "core/layouts/dashlayout/dashlayout";
import { breadCrumbsArr } from "./breadcrumbs";
import CoopButton from "shared/components/form/button/button.component";
import { Link, useNavigate } from "react-router-dom";
import styles from "./success.module.scss";
import { successList } from "./success.data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CoopToCoopSuccess() {
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr);
  const navigate = useNavigate();

  return (
    <div className={`${styles["custom-success"]}`}>
      <img src={success} alt="" className="mb-3"/>
      <p className="main-text fw-700 color-title text-center">
        Successfully Done
      </p>
      <p className="secondary-text text-center">
        Your transactions has been successfully done.
      </p>
      <div className="row">
        <div className="col-none col-md-3"></div>
        <div className="card col-12 col-md-6">
          <div className="card-body row">
            {successList.map((items, index) => {
              return (
                <>
                  <div className="col-6">
                    <p className="color-gray">{items.name}</p>
                  </div>
                  <div className="col-6">
                    <p>{items.detail}</p>
                  </div>
                </>
              );
            })}
            <div className={`${styles["custom-line"]} col-12`}></div>
            
            <div className="col-6 pt-2">
              <p className="fw-500">Total Amount</p>
            </div>
            <div className="col-6 pt-2 fw-600">
              <p className="color-primary">NPR 12000.00</p>
            </div>
            
          </div>
        </div>
        <div className="col-none col-md-3"></div>
      </div>

      <CoopButton
        className="button-comp col-8 col-md-4 col-lg-2 mt-4"
        btnName="Dashboard"
        onClick={() => navigate("/dashboard")}
      />
      <p className="color-primary mt-3">
      <FontAwesomeIcon icon={faArrowDown} />  Download PDF
      </p>
    </div>
  );
}
