import React from "react";
import HeaderTitle from "shared/components/headerTitle/headerTitle.component";
import HowItWorksContent from "./components/howItWorksContent";
import styles from "./howItWorks.module.scss";

export default function HowItWorks() {
  return (
    <>
      <div className="container position-relative">
        <HeaderTitle titleText={"How it"} colorText={" Works"} />

        <div className={`row py-5 ${styles["works-content"]} `}>
          <div className={`col-12 col-md-6 px-5 order-1 order-md-1 `}>
            <div className="d-flex justify-content-end">
              <HowItWorksContent />
            </div>
          </div>

          <div className={`col-12 col-md-6 px-5 order-2 order-md-2`}>
            <div className="pb-5  order-sm-last text-center text-md-start">
              <h4 className="main-text">
                Through mBanking/eBanking of associated cooperative/bank
              </h4>
              <p className="">gggg</p>
              <p className="">gggg</p>
              <p className="">gggg</p>
            </div>
          </div>

         

          <div className={`col-12 col-md-6 px-5 order-sm-2 order-4 order-md-3`}>
            <div className="pb-5 text-center text-md-end">
              <h4 className="main-text ">
                Through cooplink web-portal
              </h4>
              <p className="">gggg</p>
              <p className="">gggg</p>
              <p className="">gggg</p>
            </div>
          </div>

          <div className="col-12 col-md-6 px-5 order-3 order-md-4 ">
            <div className="d-flex">
              <HowItWorksContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

