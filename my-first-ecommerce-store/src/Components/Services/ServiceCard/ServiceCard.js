import React from 'react'
import classes from './ServiceCard.css'

const ServiceCard = (props) => {
    return (
        <div className={classes.ServiceCard}>
            <h1 className={classes.Heading}>{props.heading}</h1>
            <div className={classes.DescBox}>
                <p className={classes.Description}>
                    {props.description}
                </p>
                <button className={classes.Btn}>Read more...</button>
            </div>
        </div>
    )
}

export default ServiceCard
