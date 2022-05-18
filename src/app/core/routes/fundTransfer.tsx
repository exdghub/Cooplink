import DashLayout from "core/layouts/dashlayout/dashlayout";
import React from "react";

// const CoopToBankPage = React.lazy(
//   () => import("modules/fundTransfer/coopToBank/coopToBank.module")
// );
const BankToCoopForm = React.lazy(
  () => import("modules/fundTransfer/bankToCoop/form/form.module")
);
const BankToCoopConfirmation = React.lazy(() => import("modules/fundTransfer/bankToCoop/confirmation/confirmation.module"))
const BankToCoopSuccess = React.lazy(() => import("modules/fundTransfer/bankToCoop/success/sucess.module"))

// const CoopToCoopPage = React.lazy(
//   () => import("modules/fundTransfer/coopToCoop/coopToCoop.module")
// );

export const fundTransferRoutes = {
  path: "/bank-to-coop",
  element: <DashLayout />,
  children: [{ index: true, element: <BankToCoopForm /> },
  { path: "confirmation", element: <BankToCoopConfirmation /> },
  { path: "success", element: <BankToCoopSuccess /> },],
};


