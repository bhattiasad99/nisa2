import React, { useEffect } from 'react'
import classes from './Nav.css';
import { FaNotesMedical } from 'react-icons/fa';
import NavList from '../../Components/NavList/NavList'

const Nav = (props) => {
    useEffect((el => console.log(props)), [])
    return (
        <nav className={classes.Nav}>
            <div className={classes.Logo}>
                <FaNotesMedical size={20} className={classes.LogoIcon} />
                <span className={classes.LogoName}>Nisa Nursing Home</span>
            </div>
            <NavList eachLinks={props.links} clickForAppointment={props.forScrollingToTop} />
        </nav >
    )
}

export default Nav
