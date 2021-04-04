import React from 'react'
import classes from './NavList.css'
import ListItem from './ListItem/ListItem'

const NavList = (props) => {
    return (
        <div className={classes.NavList}>
            <ul className={classes.List}>
                {props.eachLinks.map(el => (
                    <ListItem heading={el.name} actionClick={el.actionClick} key={el.id} id={el.id} />
                ))}
            </ul>
            <ul className={classes.Sign}>
                <li className={classes.Sign__el}>Register</li>
                <li className={classes.Sign__el}>Sign in</li>
            </ul>
        </div>
    )
}

export default NavList
