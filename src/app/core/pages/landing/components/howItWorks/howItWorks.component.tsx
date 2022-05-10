import React from "react";
import HeaderTitle from "shared/components/headerTitle/headerTitle.component";
import HowItWorksContent from "./components/howItWorksContent";
import styles from "./howItWorks.module.scss";

export default function HowItWorks() {
  return (
    <>
      <div className="container">
        <HeaderTitle titleText={"How it"} colorText={" Works"} />

        <div className={`row py-5 ${styles["works-content"]} `}>
          <div className="col-12 col-md-6 px-5">
            <div className="d-flex justify-content-end">
              <HowItWorksContent />
            </div>

            <div className={`pt-4 `}>
              <p className="main-text fw-700 text-end">
                Through cooplink web-portal
              </p>
              <p className="text-end">gggg</p>
              <p className="text-end">gggg</p>
              <p className="text-end">gggg</p>
            </div>
          </div>

          <div className={`col-12 col-md-6 px-5`}>
            <div className="pb-5">
              <p className="main-text fw-700">
                Through mBanking/eBanking of associated cooperative/bank
              </p>
              <p className="">gggg</p>
              <p className="">gggg</p>
              <p className="">gggg</p>
            </div>
            <div className="pt-5">
              <HowItWorksContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

