import React, { useEffect } from 'react'
import classes from './About.css'
import AboutPic from '../../img/about.jpg'

const About = (props) => {
    useEffect((el => {
        console.log('hi', props)
    }))
    return (
        <div className={classes.About}>
            <div className={classes.Content}>
                <h1 className={classes.Heading}>About Us</h1>
                <div className={classes.ParaBox}>
                    <p className={classes.Para}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nostrum voluptate sint distinctio tempora velit consectetur mollitia minus illo ad. Iste, incidunt quod error vero at accusamus illum iusto optio!</p>
                    <img src={AboutPic} alt="about-us" className={classes.Picture} />
                </div>
            </div>
        </div>
    )
}

export default About
