import React from 'react'
import { RatingProps } from './ratings.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./ratings.module.scss"

const Ratings = (props: RatingProps) => {
    const { rating } = props

    const totalRating = 5;
    const noColor = totalRating - rating

    return (
        <div>
            {[...Array(rating)].map((e, i) => <FontAwesomeIcon icon={faStar} className={styles["rating-gold"]} />)}
            {[...Array(noColor)].map((e, i) => <FontAwesomeIcon icon={faStar} className={styles["rating-grey"]} />)}
        </div >
    )
}

export default Ratings