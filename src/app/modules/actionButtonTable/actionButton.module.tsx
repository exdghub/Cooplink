import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useBreadcrumbs } from "core/layouts/dashlayout/dashlayout";
import React from "react";
import { useNavigate } from "react-router-dom";
import CoopButton from "shared/components/form/button/button.component";
import CoopFilterSelect from "shared/components/form/filterSelect/filterSelect.component";
import CoopSearchInput from "shared/components/form/searchInput/searchInput.component";
import TableComp from "shared/components/table/table.component";
import { breadCrumbsArr } from "./breadcrumbs";

export default function ActionButtonTable() {
  // For breadcrumbs
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr);

  const navigate = useNavigate();

  return (
    <div className="d-flex bg-white dash-outlet py-5 flex-column mb-4">
      <h5 className="px-5 pb-3">Results</h5>
      <div className="row bg-main px-5 py-3 align-items-center justify-content-between mb-3">
        <div className="col-6 col-md-4">
          <form>
            <CoopSearchInput />
          </form>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-between">
          <CoopFilterSelect label="Show: " className="" />
          <CoopButton
            btnName="Add"
            className="button-small secondary-text"
            hasIcon1
            icon1={faAdd}
            onClick={() => navigate("/action-button-table/add-user")}
          />
        </div>
      </div>
      
        <TableComp />
      
    </div>
  );
}
