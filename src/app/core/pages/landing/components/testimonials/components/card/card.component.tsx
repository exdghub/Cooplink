import React from 'react'
import Ratings from '../ratings/ratings.component'
import styles from "./card.module.scss"
import { CardProps } from './card.types'

const Card = (props: CardProps) => {
    const { name, title, description, rate, image } = props
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={image} className={styles["card__image"]} alt={name} />
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="row">
                        <div className='col'>
                            <div>{name}</div>
                            <div >{title}</div>
                        </div>
                        <div className='col'>
                            <Ratings rating={rate} />
                        </div>
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card