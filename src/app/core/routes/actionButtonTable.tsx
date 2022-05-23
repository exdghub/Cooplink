import DashLayout from "core/layouts/dashlayout/dashlayout";
import React from "react";
const ActionButtonTable = React.lazy(
    () =>import("modules/actionButtonTable/actionButton.module")
)

export const actionButtonRoutes =[
    {
        path: "/action-button-table",
        element: <DashLayout isPlainBackground={true}/>,
        children: [{index: true, element: <ActionButtonTable/>}]
    }
]