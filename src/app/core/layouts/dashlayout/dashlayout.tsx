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
import { useEffect } from "react";

export type DashboardProps = {
  isPlainBackground?: boolean;
  openSideBar?: boolean;
};
// Create a global context to access the breadcrumbs and manipulate them
const BreadCrumbCtx = React.createContext<BreadCrumbCtxType>({
  nav: [],
  setNav: () => {},
});

const DashLayout: React.FC<DashboardProps> = (props): JSX.Element => {
  const { isPlainBackground = false, openSideBar } = props;
  // Create a state to store and change the breadcrumbs refrencing them to the global context we created
  const [breadcrumbNav, setBreadcrumbNav] = useState<
    { label: string; url: string }[]
  >([
    {
      label: "Home",
      url: "/dashboard",
    },
  ]);
  const [showSideNav, setShowSideNav] = useState(true);
  
  const handleToggle = () => {
    setShowSideNav(!showSideNav);
    console.log("---------------tttt", showSideNav);
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 821 && handleSideNavToggle();
  },[width]);

  function handleSideNavToggle() {
    setWidth(width)
    
  }

  // If user is not logged in then navigate to the home page
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <BreadCrumbCtx.Provider
      value={{ nav: breadcrumbNav, setNav: setBreadcrumbNav }}
    >
      <div className="container-fluid bg-grey m-0 p-0">
        <div className={styles["dash__container"]}>
          <div
            className={` ${
              showSideNav
                ? `${styles["dash__sidenav"]}`
                : `${styles["toggle-sidenav"]}`
            } `}
          >
            <SideNav
              menu={navitems}
              onsideBarNav={handleToggle}
              openSideBar={showSideNav}
            />
          </div>
          <div className={styles["dash__content"]}>
            <DashHeader onSidebarNav={handleToggle} openSideBar={showSideNav} />
            <div
              className="container-fluid d-flex flex-column mt-5 pt-2"
              style={{ minHeight: `calc(100vh - 90px)` }}
            >
              <React.Suspense fallback="...Loading">
                <div className="py-2 px-4">
                  <DashBreadcrumbs breadcrumb={breadcrumbNav} />
                </div>
                <div
                  className={`mx-4 mb-3${
                    isPlainBackground === true ? `` : `bg-white`
                  } `}
                >
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
