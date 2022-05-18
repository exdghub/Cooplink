import React from "react";
import CoopButton from "shared/components/form/button/button.component";
import { cToCList } from "./cToCDetails.data";
import { breadCrumbsArr } from './breadcrumbs';
import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout'

export default function CoopToCoopConfirmation() {

  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr)

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
                        <p className="color-gray">{item.name}</p>
                      </div>
                      <div className="col-6">
                        <p className="fw-600">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-5 row w-100 justify-content-center justify-content-md-start">
          <CoopButton
            className="button-secondary col-5 col-md-2 mr-3"
            btnName="Back"
          />
          <CoopButton
            className="button-comp col-5 col-md-2"
            btnName="Proceed"
          />
        </div>
      </div>
    </>
  );
}
