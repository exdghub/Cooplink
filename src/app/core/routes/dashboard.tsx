
import DashLayout from "core/layouts/dashlayout";
import React from "react";

const DashboardPage = React.lazy(() => import("modules/dashboard/dashboard.module"))

export const dashboardRoutes =
{
    path: "/dashboard",
    element: <DashLayout />,
    children: [
        { index: true, element: <DashboardPage /> }
    ]
}
