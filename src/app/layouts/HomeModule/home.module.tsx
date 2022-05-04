import React from "react";
import CoopButton from "../../shared/components/Form/CoopButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div className={`main-gradient pt-5 mt-5 ${styles.home_wrapper}`}>
        <div className="container">
          <div className={`col-6`}>
            <h2 className="">
            Autonomous association of person
            </h2>
            <ul>
              <li>
                <p>34</p>
                <span>Banks</span>
              </li>
              <li>
                <p>4</p>
                <span>Remittance</span>
              </li>
              <li>
                <p>14</p>
                <span>Wallet</span>
              </li>
            </ul>
            <p>
              For a long time, we have felt that enabling frictionless
              transactions is a major problem and nobody seems to be doing it
              right in Nepal.
            </p>
            <CoopButton btnName="Know More" />
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
