import { useBreadcrumbs } from "core/layouts/dashlayout/dashlayout";
import React from "react";
import { useNavigate } from "react-router-dom";
import CoopButton from "shared/components/form/button/button.component";
import CoopInput from "shared/components/form/input/input.component";
import CoopSelect from "shared/components/form/select/select.component";
import { breadCrumbsArr } from "./breadcrumbs";

const TransactionForm = () => {
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <div className={`row d-flex justify-content-between`}>
        <h5 className="">Transactions Report</h5>
        <div className="col-12 col-md-5">
          <CoopInput
            label="Transaction Id"
            placeholder="Enter Transaction Id"
          />
        </div>
        <div className="col-12 col-md-5">
          <CoopSelect label="Transaction Status"/>
        </div>
        <div className="col-12 col-md-5">
          <CoopInput label="From Date" placeholder="Select Date" />
        </div>

        <div className="col-12 col-md-5">
          <CoopInput label="To Date" placeholder="Select Date" />
        </div>
        <div className="col-12 col-md-5 d-flex pt-3">
          <CoopButton
            className="button-secondary"
            btnName="Clear"
            onClick={() => navigate("/dashboard")}
          />
          <CoopButton
            className="button-comp mx-3"
            btnName="Search"
            onClick={() => navigate("/coop-to-coop/confirmation")}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
