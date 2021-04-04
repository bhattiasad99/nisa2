import React from 'react'
import classes from './Footer.css'
import Aux from '../../hoc/React-Aux'
const Footer = (props) => {
    return (
        <Aux>
            <footer className={classes.Footer}>
                <h1 className={classes.Heading}>Nisa Nursing Home</h1>
                <div className={classes.Footer__content}>
                    <div className={classes.QuickLinks}>
                        <h2 className={classes.Heading__secondary}>Quick Links</h2>
                        <ul className={classes.QuickLinks__links}>
                            {props.links.map(el => {
                                return (
                                    <li className={classes.QuickLink} key={el.id}>{el.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={classes.Address}>
                        <h2 className={classes.Heading__secondary} style={{ flexGrow: 1 }}>Address</h2>
                        <p className={classes.Address__para}>House Number 10, Adyala Road<br />Rawalpindi</p>
                    </div>
                </div>
            </footer>
        </Aux >
    )
}

export default Footer
