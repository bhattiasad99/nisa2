import React from 'react'
import classes from './ListItem.css'

const ListItem = (props) => {

    return (
        <li className={classes.ListItem} onClick={props.actionClick} id={props.id}>
            {props.heading}
        </li>
    )
}

export default ListItem
