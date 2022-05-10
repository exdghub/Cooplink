import React from "react";
import CoopButton from "../../shared/components/Form/CoopButton";
import styles from "./home.module.scss";
import dash from "../../../assets/images/Dashboard.svg";

export default function Home() {
  return (
    <>
      <div className={`row py-5 ${styles["home-wrapper"]}`}>
        <div className={`col-md-12 col-lg-6`}>
          <h2 className={`primary-header`}>Autonomous association of person</h2>
          <div className={`d-flex gap-5 pt-3`}>
            <div className={`d-flex align-items-center gap-2`}>
              <span className={`sub-header color-primary fw-600`}>25</span>
              <span className={`primary-text fw-600`}>
                Active <br /> Cooperative
              </span>
            </div>
            <div className={`d-flex align-items-center gap-2`}>
              <span className={`sub-header color-primary fw-600`}>10</span>
              <span className={`primary-text fw-600`}>
                Active <br /> Merchants
              </span>
            </div>
          </div>
          <p className={`mt-4 w-75 primary-text`}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <CoopButton className={`mt-2 button-main`} btnName="Know More" />
        </div>
        <div className={`col-6 d-none d-md-block`}>
          {/* <img src={dash} alt="dashbaord"/> */}

          ghdghdfhg
        </div>
      </div>
    </>
  );
}
