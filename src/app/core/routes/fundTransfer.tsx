import DashLayout from "core/layouts/dashlayout/dashlayout";
import React from "react";

const BankToCoopForm = React.lazy(() => import("modules/fundTransfer/bankToCoop/form/form.module"));
const BankToCoopConfirmation = React.lazy(() => import("modules/fundTransfer/bankToCoop/confirmation/confirmation.module"))
const BankToCoopSuccess = React.lazy(() => import("modules/fundTransfer/bankToCoop/success/sucess.module"))


const CoopToCoopForm = React.lazy(() => import("modules/fundTransfer/coopToCoop/form/form.page"))
const CoopToCoopConfirmation = React.lazy(() => import("modules/fundTransfer/coopToCoop/confirmation/confimation.page"))
const CoopToCoopSuccess = React.lazy(() => import("modules/fundTransfer/coopToCoop/success/success.page"))


export const fundTransferRoutes = [
  {
    path: "/bank-to-coop",
    element: <DashLayout />,
    children: [{ index: true, element: <BankToCoopForm /> },
    { path: "confirmation", element: <BankToCoopConfirmation /> },
    { path: "success", element: <BankToCoopSuccess /> },],
  },
  {
    path: "/coop-to-coop",
    element: <DashLayout />,
    children: [{ index: true, element: <CoopToCoopForm /> },
    { path: "confirmation", element: <CoopToCoopConfirmation /> },
    { path: "success", element: <CoopToCoopSuccess /> }]
  }
];


