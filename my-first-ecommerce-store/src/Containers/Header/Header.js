import React, { useEffect } from 'react'
import classes from './Header.css'
import BackgroundImg from '../../img/header.jpg'
import Button from '@material-ui/core/Button';

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <img src={BackgroundImg} className={classes.BackgroundImg} alt="background image" />

            <Button className={classes.Btn} variant="contained" color="secondary" onClick={props.clicked}>
                Book an Appointment!
                </Button>
        </div >
    )
}

export default Header
