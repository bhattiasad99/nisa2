import React from 'react'
import classes from './GetAppointment.css'

const GetAppointment = (props) => {
    return (
        <div className={classes.GetAppointment} id="getAppointmentCard">
            {/* form */}
            <h1 className={classes.Form}>Get Appointment</h1>
            <form>
                <label to="doctor" className={classes.Label}>select doctor</label>
                <input id="doctor" type="text" className={classes.InputDoctor} />
            </form>
        </div>
    )
}

export default GetAppointment
