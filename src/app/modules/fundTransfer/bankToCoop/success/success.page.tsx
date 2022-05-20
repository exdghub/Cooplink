import { useBreadcrumbs } from "core/layouts/dashlayout/dashlayout";
import React from "react";
import { breadCrumbsArr } from "./breadcrumbs";
import { useNavigate } from "react-router-dom";
import CoopButton from "shared/components/form/button/button.component";

const BankToCoopSuccess = () => {
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr);

  const navigate = useNavigate();

  return (
    <div>
      Success Page
      <CoopButton
        btnName="Back to home"
        onClick={() => navigate("/dashboard")}
      />
    </div>
  );
};

export default BankToCoopSuccess;
