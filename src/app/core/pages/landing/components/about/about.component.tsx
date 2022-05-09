import React from "react";
import HeaderTitle from "../../../../../shared/components/headerTitle/headerTitle.component";
import AboutContent from "./components/aboutContent.component";

export default function About() {
  return (
    <>
      <div className="py-5">
        <HeaderTitle titleText={"About"} colorText={" Us"} className={``} />
        <div className={`pt-5`}>
          <div className={`container-fluid secondary-gradient`}>
            <div className={`container py-5`}>
              <div className=" row">
                <div className={`col-6 col-md-5`}>sssss</div>
                <div className={`col-6 col-md-7`}>
                  <AboutContent
                    title="Management"
                    desc="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an"
                  />
                </div>
              </div>
              <div className=" row">
                <div className={`col-6 col-md-7`}>sssss</div>
                <div className={`col-6 col-md-5`}>xxxxxxx</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
