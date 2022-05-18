import { faStar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { SideNavProps } from './sidenav.types';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./sidenav.module.scss"

const SideNav = (props: SideNavProps) => {
    const { menu } = props;
    const [mobileView, setMobileView] = useState(false);
    const [tabView, setTabView] = useState(false)
    const [showSideBar, setShowSideBar] = useState(true);

    // For the responsive sidebar
    const updateViewState = () => {
        // For tablet view
        if (!mobileView && document.documentElement.clientWidth < 768) {
            setMobileView(true);
            setShowSideBar(false)
        }
        // For mobile view
        else if (!tabView && document.documentElement.clientWidth < 540) {
            setMobileView(false);
            setShowSideBar(true)
        }
        // default 
        else {
            setMobileView(false);
            setTabView(false);
            setShowSideBar(true)
        }
    }

    useEffect(() => {
        updateViewState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Check for the responsive side bar
    useEffect(() => {
        //will be called on component mount
        window.addEventListener('resize', updateViewState);

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', updateViewState)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Toggle the side nav based on viewport size
    const toggleSideNav = () => {
        if (mobileView) {

        }

    }



    console.log("movule view", mobileView)


    return (
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div className="d-flex align-items-center justify-content-between w-100 pb-3 mb-md-0 me-md-auto text-dark ">
                <span className="fs-5 ">Cooplink</span>
                <FontAwesomeIcon icon={faBars} className={styles["hamburger"]} onClick={toggleSideNav} />
            </div>

            <ul className="nav" id="menu">
                {menu.map((item: any, index: any) => {
                    return (<div key={index} className="w-100">

                        {/* For single item  */}
                        {item.type === "single" && <li className="nav-item ">
                            <NavLink to={item.to} className={styles["side-nav"]}>
                                <div className={`nav-link align-middle px-0 ${styles["side-nav-link"]}`}>
                                    <FontAwesomeIcon icon={item.img} />
                                    {/* <img src={item.img} alt={item.name} /> */}
                                    <span className="ms-1 d-none d-sm-inline">{item.name}</span>
                                </div>
                            </NavLink>
                        </li>}

                        {/* For menu items */}
                        {item.type === "nested" && <div className="py-2">
                            <li className="nav-item d-none d-sm-block">
                                <div className={`nav-link align-middle px-0 ${styles["side-nav-link"]}`}>
                                    <span className="ms-1 text-uppercase d-none d-sm-inline">{item.title}</span>
                                </div>
                            </li>

                            {item.children.map((child: any, index: any) => {
                                return (
                                    <div key={index}>
                                        {/* No dropdowns */}
                                        {child.type === "one" && <li className="nav-item">
                                            <NavLink to={child.to} className={styles["side-nav"]}>
                                                <div className={`nav-link align-middle px-0 ${styles["side-nav-link"]}`}>
                                                    <FontAwesomeIcon icon={child.img} />
                                                    {/* <img src={child.img} alt={child.name} /> */}
                                                    <span className="ms-1 d-none d-sm-inline">{child.name}</span>
                                                </div>
                                            </NavLink>
                                        </li>}

                                        {/* Has dropdowns */}
                                        {child.type === "many" && <li>
                                            {/* Dropdown parent */}
                                            <a href={`#${child.id}`} data-bs-toggle="collapse" className={`nav-link px-0 align-middle ${styles["side-nav-link"]}`}>
                                                <FontAwesomeIcon icon={child.img} />
                                                <span className="ms-1 d-none d-sm-inline">{child.parent}</span>
                                                <span className="mr-0"> <FontAwesomeIcon icon={faAngleDown} /></span>
                                            </a>
                                            {/* Dropdown items */}
                                            <ul className="collapse show nav flex-column ms-1" id={child.id} data-bs-parent="#menu">
                                                {child.subitems.map((subitem: any, index: any) => {
                                                    return (
                                                        <li className="w-100" key={index}>
                                                            <NavLink to={`${subitem.to}`} className={styles["side-nav"]}>
                                                                <div className={`nav-link pl-sm-1 pl-md-4 ${styles["side-nav-link"]}`}>
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    {/* <img src={subitem.img} alt={subitem.name} /> */}
                                                                    <span className="ms-1 d-none d-sm-inline">{subitem.name}</span>
                                                                </div>
                                                            </NavLink>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>}
                                    </div>
                                )
                            })}
                        </div>}
                    </div>)
                })}
            </ul>
        </div>
    )
}

export default SideNav