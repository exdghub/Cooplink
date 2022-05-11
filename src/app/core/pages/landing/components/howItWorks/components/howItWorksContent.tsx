import React from "react";
import money from "assets/images/money.png";
import styles from "../howItWorks.module.scss";
export default function HowItWorksContent() {
  return (
    <>
      <div
        className={`comp-gradient rounded-top p-4 row ${styles["works-wrapper"]}`}
      >
        <div className={`col-6`}>
          <div
            className={`rounded-circle position-relative ${styles["works-img"]}`}
          >
            <img src={money} alt="money" />
          </div>
          <div
            className={`rounded-circle position-relative ${styles["works-img"]}`}
          >
            <img src={money} alt="money" />
          </div>
        </div>
        <div className={`col-6`}>
          <div
            className={`rounded-circle position-relative ${styles["works-img"]}`}
          >
            <img src={money} alt="money" />
          </div>
          <div
            className={`rounded-circle position-relative ${styles["works-img"]}`}
          >   
            <img src={money} alt="money" />
          </div>
        </div>
      </div>
    </>
  );
}
