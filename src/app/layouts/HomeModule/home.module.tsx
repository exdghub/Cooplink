import React from "react";
import CoopButton from "../../shared/components/Form/CoopButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
  
      <div className={`main-gradient pt-5 mt-5 ${styles.home_wrapper}`}>
        <div className="container d-flex">
          <div className={`col-6`}>
            <h2 className={`primary-header`}>
              Autonomous association of person
            </h2>
            <div className={`d-flex pt-3 ${styles["banner-grid"]}`}>
              <div className={`${styles["banner-content"]}`}>
                <span className={`sub-header color-primary fw-600`}>25</span>
                <span className={`secondary-text fw-600`}>Active <br/> Cooperative</span>
              </div>
              <div className={`${styles["banner-content"]}`}>
                <span className={`sub-header color-primary fw-600`}>10</span>
                <span className={`secondary-text fw-600`}>Active <br/> Merchants</span>
              </div>
            </div>
            <p className={`mt-4 w-75 fw-600`}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <CoopButton className={`w-25 mt-2 button-main`} btnName="Know More" />
          </div>
          <div className={`col-6`}>
            {/* <BannerRight result = {data}/> */}
            ghdghdfhg
          </div>
        </div>
      </div>
    </>
  );
}
