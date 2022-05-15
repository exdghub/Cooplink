
import React from "react";

const LandingPageLayout = React.lazy(() => import("core/pages/landing/landingPage.module"))

export const landingRoutes =
{
    path: "/",
    element: <React.Suspense fallback="...Loading">
        <LandingPageLayout />
    </React.Suspense>,
}
