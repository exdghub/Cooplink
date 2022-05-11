import React from "react";

import about from "assets/images/about.jpg";
import CoopButton from "shared/components/form/button/button.component";
import HeaderTitle from "shared/components/headerTitle/headerTitle.component";

import styles from "./about.module.scss";
export default function About() {
  return (
    <>
      <div className="py-5">
        <HeaderTitle titleText={"About"} colorText={" Us"} className={`pb-5`} />
        <div className={`pt-5`}>
          <div className={`container-fluid secondary-gradient`}>
            <div className={`container`}>
              <div className=" row">
                <div
                  className={`col-6 col-md-5 d-flex justify-content-end ${styles["about-img"]}`}
                >
                  <img className={`position-relative img-fluid`} src={about} alt="about" />
                </div>
                <div className={`col-6 col-md-7 py-5`}>
                  <p className={`fw-600 main-text`}>Management</p>
                  <p className={`w-75 text-right`}>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s. when an
                  </p>
                  <CoopButton
                    className={`mt-2 button-main`}
                    btnName="Know More"
                  />
                </div>
              </div>
              <div className=" row">
                <div className={`col-6 col-md-7 ${styles["about-img2"]}`}>
                  <p className={`fw-600 main-text`}>Teams</p>
                  <p>
                    is simply dummy text of the printing and typesetting

                  </p>
                  <div className={`d-flex justify-content-end`}>
                    <CoopButton
                      className={`mt-2 button-main`}
                      btnName="Know More"
                    />
                  </div>
                </div>
                <div className={`col-6 col-md-5 ${styles["about-img2"]}`}>
                  <img className={`position-relative img-fluid`} src={about} alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
