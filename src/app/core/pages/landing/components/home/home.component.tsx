import React from "react";
import CoopButton from "shared/components/form/button/button.component";
import styles from "./home.module.scss";
import dash from "../../../assets/images/Dashboard.svg";

export default function Home() {
  return (
    <>
      <div className={`row py-5 ${styles["home-wrapper"]}`}>
        <div className={`col-md-12 col-lg-6`}>
          <h2>Autonomous association of person</h2>
          <div className={`d-flex pt-3`}>
            <div className={`d-flex align-items-center`}>
              <span className={`sub-header color-primary fw-600`}>25</span>
              <span className={`px-3 primary-text fw-600`}>
                Active <br /> Cooperative
              </span>
            </div>
            <div className={`d-flex px-4 align-items-center`}>
              <span className={`sub-header color-primary fw-600`}>10</span>
              <span className={`px-3 primary-text fw-600`}>
                Active <br /> Merchants
              </span>
            </div>
          </div>
          <p className={`mt-4 primary-text`}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <CoopButton className={`mt-2 button-main`} btnName="Know More" />
        </div>
        <div className={`col-6 d-none d-lg-block`}>ghdghdfhg</div>
      </div>
    </>
  );
}
