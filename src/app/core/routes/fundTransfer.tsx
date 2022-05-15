import DashLayout from "core/layouts/dashlayout";
import React from "react";

const CoopToBankPage = React.lazy(
  () => import("modules/fundTransfer/coopToBank/coopToBank.module")
);
const BankToCoopPage = React.lazy(
  () => import("modules/fundTransfer/bankToCoop/bankToCoop.module")
);
const CoopToCoopPage = React.lazy(
  () => import("modules/fundTransfer/coopToCoop/coopToCoop.module")
);

export const fundTransferRoutes = {
  path: "/fund-transfer",
  element: <DashLayout />,
  children: [{ path: "coop-to-bank", element: <CoopToBankPage /> },
  { path: "coop-to-coop", element: <CoopToCoopPage /> },
  { path: "bank-to-coop", element: <BankToCoopPage /> },],
};
