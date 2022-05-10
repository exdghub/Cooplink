import React from 'react'
import Ratings from '../ratings/ratings.component'
import styles from "./card.module.scss"
import { CardProps } from './card.types'

const Card = (props: CardProps) => {
    const { name, title, description, rate, image } = props
    return (
        <div className={styles["card__container"]}>
            <div className={styles["card__image__container"]}>
                <img src={image} className={styles["card__image"]} alt={name} />
            </div>
            <div className={styles["card__content"]}>
                <div>
                    <div>{name}</div>
                    <div>{title}</div>
                </div>
                <div>
                    <Ratings rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Card