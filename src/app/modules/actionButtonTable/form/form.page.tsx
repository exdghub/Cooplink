import { useBreadcrumbs } from "core/layouts/dashlayout/dashlayout";
import React from "react";
import { useNavigate } from "react-router-dom";
import CoopButton from "shared/components/form/button/button.component";
import CoopFileInput from "shared/components/form/fileInput/fileInput.component";
import CoopInput from "shared/components/form/input/input.component";
import CoopRadioButton from "shared/components/form/radioButton/radioButton.component";
import CoopSelect from "shared/components/form/select/select.component";
import { breadCrumbsArr } from "../breadcrumbs";

export default function ActionAddUser() {
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr);

  const navigate = useNavigate();
  return (
    <div className="d-flex p-5 bg-white justify-content-center dash-outlet">
      {/* <div className={`${styles["custom-coop"]} bg-secondary`} >
        ddddd
      </div> */}
      <div className={`row d-flex justify-content-between `}>
        <h5 className="">Add User</h5>
        <div className="col-12 col-lg-5">
          <CoopSelect label="User Name" />
        </div>
        <div className="col-12 col-lg-5">
          <CoopInput label="Full Name" placeholder="Enter Full Name" />
        </div>
        <div className="col-12 col-lg-5">
          <CoopInput label="Email Address" placeholder="Enter Email Address" />
        </div>

        <div className="col-12 col-lg-5">
          <CoopInput label="Mobile Number" placeholder="Enter Mobile Number" />
        </div>

        <div className="col-12 col-lg-5">
          <CoopFileInput label="Profile Image"/>
        </div>
        <div className="col-12 col-lg-5">
          <CoopRadioButton label="Is this Primary User?" radioLabel="Yes" radioLabel2="No"/>
        </div>
        <div className="col-12 col-lg-5">
          <div className="d-flex ">
            <CoopButton
              className="button-secondary"
              btnName="Back"
              onClick={() => navigate("/dashboard")}
            />
            <CoopButton
              className="button-comp mx-3"
              btnName="Proceed"
              //   onClick={() => navigate("/coop-to-coop/confirmation")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
