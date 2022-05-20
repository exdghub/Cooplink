import DashLayout from "core/layouts/dashlayout/dashlayout";
import React from "react";

const TransactionForm = React.lazy(
  () => import("modules/transactionReport/form/form.page")
);

export const reportRoutes = [
  {
    path: "/transaction-report",
    element: <DashLayout />,
    children: [{ index: true, element: <TransactionForm /> }],
  },
];
