import React from 'react'
import { RatingProps } from './ratings.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./ratings.module.scss"

const Ratings = (props: RatingProps) => {
    const { rating } = props

    const totalRating = 5;
    const noColor = totalRating - rating

    return (
        <div>
            {[...Array(rating)].map((e, i) => <span className="busterCards" key={i}><FontAwesomeIcon icon="fa-solid fa-star" /></span>)}
            {[...Array(noColor)].map((e, i) => <span className="busterCards" key={i}>2</span>)}
            <i className="fa fa-star rating-color"></i>
            <i className="fa fa-star rating-color"></i>
            <i className="fa fa-star rating-color"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div >

    )
}

export default Ratings