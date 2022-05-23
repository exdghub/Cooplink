
import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";

import { dashboardRoutes } from "./dashboard";
import { fundTransferRoutes } from "./fundTransfer";
import { reportRoutes } from "./reports";
import { landingRoutes } from "./landing";
import { actionButtonRoutes } from "./actionButtonTable";

const PageNotFound = React.lazy(() => import("core/pages/notfound/notfound.module"));

export const routes: RouteObject[] = [
    landingRoutes,
    dashboardRoutes,
    ...fundTransferRoutes,
    ...reportRoutes,
    ...actionButtonRoutes,

    {
        path: "*",
        element: <React.Suspense fallback="...Loading"><PageNotFound /></React.Suspense>
    }
]


const AppRoutes: React.FC = (): JSX.Element => {
    const router = useRoutes(routes);
    return <>{router}</>

}

export default AppRoutes