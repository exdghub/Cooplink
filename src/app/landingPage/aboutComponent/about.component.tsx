import React from "react";
import CoopButton from "../../shared/components/Form/CoopButton";
import HeaderTitle from "../../shared/components/HeaderTitle/HeaderTitle";
import about from "../../../assets/images/about.jpg";
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
                  <img className={`mh-100 position-relative`} src={about} alt="about" />
                </div>
                <div className={`col-6 col-md-7 py-5`}>
                  <p className={`fw-600 main-text`}>Management</p>
                  <p className={` text-right`}>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s. when an
                  </p>
                  <CoopButton
                    className={`w-25 w-md-25 mt-2 button-main`}
                    btnName="Know More"
                  />
                </div>
              </div>
              <div className=" row">
                <div className={`col-6 col-md-7 ${styles["about-img2"]}`}>
                  <p className={`fw-600 main-text`}>Management</p>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s. when an
                  </p>
                  <div className={`d-flex justify-content-end`}>
                  <CoopButton
                    className={`w-25 w-md-25 mt-2 button-main`}
                    btnName="Know More"
                  />
                  </div>
                </div>
                <div className={`col-6 col-md-5 ${styles["about-img2"]}`}>
                  <img className={`mh-100 position-relative`} src={about} alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
