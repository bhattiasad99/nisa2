import React, { useEffect } from 'react'
import classes from './NavList.css'
import ListItem from './ListItem/ListItem'
import { Link } from 'react-router-dom'

const NavList = (props) => {
    const renderNavLink = (link) => {
        if (renderCheckCondPath(link)) {
            return (
                <Link to={
                    {
                        pathname: link.path
                    }
                } style={
                    {
                        textDecoration: 'none'
                    }}>
                    <ListItem heading={link.name} key={link.id} id={link.id} />
                </Link>
            )
        }
        if (!renderCheckCondPath(link)) {
            return (
                <ListItem heading={link.name} actionClick={link.actionClick} key={link.id} id={link.id} />
            )
        }
    }

    const renderCheckCondPath = (obj) => {
        let temp = { ...obj }
        if (temp.path) {
            return true
        } else {
            return false
        }
    }

    return (

        <div className={classes.NavList}>
            <ul className={classes.List}>
                <span>
                    {props.eachLinks.map(el => renderNavLink(el))}
                </span>

            </ul>
            {console.log('testing state', props.someOtherText)}
            <ul className={classes.Sign}  >
                <Link to={
                    {
                        pathname: '/patient-registration',

                    }
                } style={
                    {
                        textDecoration: 'none'
                    }
                } >
                    <li className={classes.Sign__el} key='1'>Register</li>
                </Link>
                <li className={classes.Sign__el} key='2'>Sign in</li>
            </ul>
        </div >
    )
}
export default NavList
