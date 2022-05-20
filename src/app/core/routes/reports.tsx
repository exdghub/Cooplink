import DashLayout from "core/layouts/dashlayout/dashlayout";
import TransactionReportResult from "modules/transactionReport/result/result.page";
import React from "react";

const TransactionForm = React.lazy(
  () => import("modules/transactionReport/form/form.page")
);

export const reportRoutes = [
  {
    path: "/transaction-report",
    element: <DashLayout isPlainBackground={true} />,
    children: [{ index: true, element: <> <TransactionForm /> <div className="mt-5"></div> <TransactionReportResult /></> }],
  },
];
