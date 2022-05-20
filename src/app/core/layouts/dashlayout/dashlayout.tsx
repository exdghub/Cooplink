import SideNav from "core/layouts/dashlayout/components/sidenav/sidenav.module";
import { useAuth } from "core/utils/auth";
import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashBreadcrumbs from "./components/breadcrumbs/breadcrumbs.module";
import DashFooter from "./components/footer/footer.module";
import DashHeader from "./components/header/header.module";
import { navitems } from "./components/sidenav/sidenav.data";
import { BreadCrumbCtxType } from "./types/breadCrumbsCtx.types";
import styles from "./dashlayout.module.scss";

// Create a global context to access the breadcrumbs and manipulate them
const BreadCrumbCtx = React.createContext<BreadCrumbCtxType>({
  nav: [],
  setNav: () => {},
});

const DashLayout: React.FC = (): JSX.Element => {
  // Create a state to store and change the breadcrumbs refrencing them to the global context we created
  const [breadcrumbNav, setBreadcrumbNav] = useState<
    { label: string; url: string }[]
  >([
    {
      label: "Home",
      url: "/dashboard",
    },
  ]);

  // If user is not logged in then navigate to the home page
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <BreadCrumbCtx.Provider
      value={{ nav: breadcrumbNav, setNav: setBreadcrumbNav }}
    >
      <div className="container-fluid bg-grey ">
        <div className={styles["dash__container"]}>
          <div className={styles["dash__sidenav"]}>
            <SideNav menu={navitems} />
          </div>
          <div className={styles["dash__content"]}>
            <DashHeader />
            <div
              className="d-flex flex-column"
              style={{ minHeight: `calc(100vh - 130px)` }}
            >
              <React.Suspense fallback="...Loading">
                <div className="py-3 px-5">
                  <DashBreadcrumbs breadcrumb={breadcrumbNav} />
                </div>
                <div className={`p-5 bg-white mx-5 ${styles["dash__outlet"]}`}>
                  <Outlet />
                </div>
              </React.Suspense>
            </div>
            <DashFooter />
          </div>
        </div>
      </div>
    </BreadCrumbCtx.Provider>
  );
};

// export a function that returns the context object of breadcrumbs that can be accessed throughout the other components
export const useBreadcrumbs = () => {
  return useContext(BreadCrumbCtx);
};

export default DashLayout;
