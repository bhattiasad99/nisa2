import React, { useEffect } from 'react'
import classes from './Home.css'
import Header from '../Header/Header'
import Services from '../../Components/Services/Services'
import ConsultantsList from '../../Components/ConsultantsList/ConsultantsList'
import { withRouter } from 'react-router-dom'
const Home = (props) => {
    useEffect((el => {
        console.log('hi', props)
    }))
    return (
        <div className={classes.Home}>
            <Header clicked={props.clicked} />
            <Services />
            <ConsultantsList />
        </div>
    )
}

export default withRouter(Home)
