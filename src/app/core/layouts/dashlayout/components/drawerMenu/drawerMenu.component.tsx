import React from "react";
import CoopButton from "shared/components/form/button/button.component";
import { DrawerMenuProps } from "./drawerMenu.types";

const DrawerMenu = (props: DrawerMenuProps) => {
  const { drawerTitle, titleText, children } = props;
  return (
    <>
    {/* <CoopButton btnName="Open" dataToggle="drawer" dataTarget="#drawer-1"/> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="drawer"
        data-bs-target="#drawer-1"
      >
        OPEN
      </button>
      <div
        className="drawer drawer-left slide"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="drawer-1-title"
        aria-hidden="true"
        id="drawer-1"
      >
        <div
          className="drawer-content drawer-content-scrollable"
          role="document"
        >
          {drawerTitle ? (
            <div className="drawer-header">
              <h4 className="drawer-title" id="drawer-1-title">
                Drawer Title
              </h4>
            </div>
          ) : (
            ""
          )}

          <div className="drawer-body">

            {children}  
            {/* <p>Drawer body</p> */}
            <button
              type="button"
              className="btn btn-secondary btn-block"
              data-dismiss="drawer"
              aria-label="Close"
            >
              {/* Close */}
            </button>
          </div>
          <div className="drawer-footer">Drawer footer</div>
        </div>
      </div>
    </>
  );
};

export default DrawerMenu;