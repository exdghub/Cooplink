import CoopToCoop from "modules/fundTransfer/coopToCoop/coopToCoop.module";
import CtoCConfirmation from "modules/fundTransfer/coopToCoop/pages/confirmation/confimation.pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

// import Login from "../app/loginModule/login.module";

export default function RoutePage() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPageLayout />} /> */}
        <Route path="/cooptocoop" element={<CoopToCoop />} />
        <Route path="/cooptocoop/confirmation" element={<CtoCConfirmation />} />
      </Routes>
    </>
  );
}
