import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashBreadCrumbsType } from './breadcrumbs.types';
import styles from "./breadcrumbs.module.scss"

const DashBreadcrumbs = (props: DashBreadCrumbsType) => {
    const { breadcrumb } = props;
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0 py-2 bg-none">
                {breadcrumb.map((path: any, key: any, row: any) => {
                    const isLast: boolean = key + 1 === row.length;
                    if (path.url !== "" || path.label !== "") {
                        return (
                            <li className={`breadcrumb-item ${styles["breadcrumb"]}`} tabIndex={key}>
                                <NavLink to={`${path.url}`} className={isLast ? styles["breadcrumb-url-active"] : styles["breadcrumb-url"]}>{path.label}</NavLink>
                            </li>
                        )
                    }
                    else { return null }
                })}
            </ol>
        </nav>
    )
}

export default DashBreadcrumbs