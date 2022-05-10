import React from "react";
import ServiceContent from "./components/serviceContent";
import dummy from "assets/images/dummyimg.jpg";
import styles from "./services.module.scss";
import HeaderTitle from "shared/components/headerTitle/headerTitle.component";

export default function Services() {
  return (
    <>
      <div className="py-5">
        <HeaderTitle
          titleText={"Our"}
          colorText={" Services"}
          desc={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
          }
          subTitle={true}
        />

        <div className={`row`}>
          <div className={`col-12 col-sm-4 `}>
            <div className={`${styles["custom-img"]}`}>
              <img src={dummy} alt="ggg" className={`mw-100`} />
            </div>
            <ServiceContent
              title={"Cooperative to Cooperative"}
              desc={
                "is simply dummy text of the printing and typesetting industry. Lorem "
              }
            />
          </div>
          <div className={`col-12 col-sm-4 `}>
            <div className={`pt-5 ${styles["custom-img"]}`}>
              <img src={dummy} alt="ggg" className={`mw-100`} />
            </div>
            <ServiceContent
              title={"Cooperative to Bank"}
              desc={
                "is simply dummy text of the printing and typesetting industry. Lorem "
              }
            />
          </div>
          <div className={`col-12 col-sm-4 pt-5`}>
            <div className={`pt-none pt-sm-5 ${styles["custom-img"]}`}>
              <img src={dummy} alt="ggg" className={`mw-100`} />
            </div>
            <ServiceContent
              title={"Bank to Cooperative"}
              desc={
                "is simply dummy text of the printing and typesetting industry. Lorem "
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
