import React from "react";
import CoopButton from "shared/components/form/button/button.component";
import { cToCList } from "./cToCDetails.data";
import { breadCrumbsArr } from './breadcrumbs';
import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout'
import { useNavigate } from "react-router-dom";
import Popup from "shared/components/modalPopup/popup.component";
import CoopMpin from "../confirmPin/confirmPin";


export default function CoopToCoopConfirmation() {

  // For breadcrumbs
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr)

  const navigate = useNavigate()

  return (
    <>
      <div className="">
        <h5 className="">Details </h5>
        <div className="card">
          <div className="card-body">
            <div className="row">
              {cToCList.map((item, index) => {
                return (
                  <div className="col-12 col-md-6">
                    <div className="row text-start justify-content-between">
                      <div className="col-6">
                        <p className="color-gray secondary-text">{item.name}</p>
                      </div>
                      <div className="col-6">
                        <p className="fw-600 secondary-text">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-5 mx-1 row w-100 justify-content-center justify-content-md-start">
          <CoopButton
            className="button-secondary col-5 col-md-2 mr-3"
            btnName="Back"
            onClick={() => navigate("/coop-to-coop")}
          />
          <CoopButton
            className="button-comp col-5 col-md-2"
            btnName="Proceed"  
            dataToggle="modal"
            dataTarget="#confirmationModal"
            // onClick={() => navigate("/coop-to-coop/success")}
          />
        </div>
      </div>

      <Popup id="confirmationModal" customClass="">
        <CoopMpin/>
      </Popup>

    </>
  );
}
