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

export type DashboardProps =
{
  isPlainBackground?:boolean
  openSideBar?: boolean
}
// Create a global context to access the breadcrumbs and manipulate them
const BreadCrumbCtx = React.createContext<BreadCrumbCtxType>({
  nav: [],
  setNav: () => {},
});

const DashLayout: React.FC<DashboardProps> = (props): JSX.Element => {
  const{isPlainBackground= false, openSideBar} = props
  // Create a state to store and change the breadcrumbs refrencing them to the global context we created
  const [breadcrumbNav, setBreadcrumbNav] = useState<
    { label: string; url: string }[]
  >([
    {
      label: "Home",
      url: "/dashboard",
    },
  ]);
  const [showSideNav, setShowSideNav] = useState(true)
  
  const handleToggle =()=>{
    setShowSideNav(!showSideNav)
    console.log("---------------tttt", showSideNav)
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
      <div className="">
        <div className={styles["dash__container"]}>
          <div className={` ${showSideNav? `${styles["dash__sidenav"]}` : `${styles["toggle-sidenav"]}`} `}>
            <SideNav menu={navitems} onsideBarNav={handleToggle} openSideBar={showSideNav} />
          </div>
          <div className={styles["dash__content"]}>
            <DashHeader/>
            <div
              className="d-flex flex-column"
              style={{ minHeight: `calc(100vh - 130px)` }}
            >
              <React.Suspense fallback="...Loading">
                <div className="py-2 px-5">
                  <DashBreadcrumbs breadcrumb={breadcrumbNav} />
                </div>
                <div className={`mx-5 ${isPlainBackground === true? ``: `bg-white`} `}>
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


