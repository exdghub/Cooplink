import React from 'react'
import GridItem from '../gridItem/gridItem.component'
import { GridItemProps } from '../gridItem/gridItem.types'
import { GridProps } from './grid.types'
import styles from "./grid.module.scss"

const GridBlock = (props: GridProps) => {
    const { items } = props
    return (
        <div className={`${styles["grid"]}`}>
            {
                items.map((item: GridItemProps, index) => {
                    return (<div key={index}>
                        <GridItem icon={item.icon} title={item.title} />
                    </div>)
                })
            }
        </div >

    )
}

export default GridBlock