
import React from "react";
import { RouteObject } from "react-router-dom";
import { dashboardRoutes } from "./dashboard";
import { fundTransferRoutes } from "./fundTransfer";
import { landingRoutes } from "./landing";


const PageNotFound = React.lazy(() => import("core/pages/notfound/notfound.module"));

export const routes: RouteObject[] = [
    landingRoutes,
    dashboardRoutes,
    ...fundTransferRoutes,
    {
        path: "*",
        element: <React.Suspense fallback="...Loading"><PageNotFound /></React.Suspense>
    }
]


