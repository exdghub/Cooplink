import React from 'react'
import { GridItemProps } from './gridItem.types'
import styles from "./gridItem.module.scss";
import fallback from "assets/images/fallback.png"

const GridItem = (props: GridItemProps) => {
    const { icon, title } = props
    return (
        <div className={`${styles["item"]} text-center  m-auto`}>
            <div className={`${styles["item__image-container"]}  bgcolor-secondary box-shadow-1 m-auto`}>
                <img src={icon} alt={title} className={styles["item__image"]} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = fallback;
                }}
                />
            </div>
            <p className={`${styles["item__title"]} mt-3`}>{title}</p>
        </div>
    )
}

export default GridItem