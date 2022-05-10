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
          
          <div className={`col-12 col-md-6 pt-2 px-5 order-1 order-md-1 `}>
            <div className="d-flex px-3 justify-content-md-end justify-content-center">
              <HowItWorksContent />
            </div>
          </div>

          <div className={`col-12 col-md-6 pt-5 px-5 order-2 order-md-2`}>
            <div className="pb-5  order-sm-last text-center text-md-start">
              <h4 className="main-text">
                Through mBanking/eBanking of associated cooperative/bank
              </h4>
              <ol className="list-group list-group-numbered">
                <li>Select fund transfer option; coop to coop, coop to bank or bank to coop</li> 
                <li>Fill in the details required.</li>   
                <li>Send and success</li>
              </ol>
            
            </div>
          </div>

          <div className={`col-12 col-md-6 pt-5 px-5 order-4 order-md-3`}>
            <div className="pb-5 text-center text-md-end">
              <h4 className="main-text ">
                Through cooplink web-portal
              </h4>
              <ol className="list-group list-group-numbered">
                <li>Select fund transfer option; coop to coop, coop to bank or bank to coop</li> 
                <li>Fill in the details required.</li>   
                <li>Send and success</li>
              </ol>
            </div>
          </div>

          <div className="col-12 col-md-6 pt-3 px-5 order-3 order-md-4 ">
            <div className="d-flex px-3 justify-content-md-start justify-content-center">
              <HowItWorksContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

