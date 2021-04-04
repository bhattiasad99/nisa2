import React from 'react'
import classes from './Services.css'
import ServiceCard from './ServiceCard/ServiceCard'
const Services = (props) => {
    const servicesList = [
        {
            id: 0,
            serviceName: 'Doctor Consultation',
            description: 'Round the Clock Duty Doctors and consultants are available for medical emergencies and daily checkup',
        },
        {
            id: 1,
            serviceName: 'Laboratory',
            description: 'State of the art Laboratory with bla bla',
        },
        {
            id: 2,
            serviceName: 'Operation Theatre',
            description: 'bla bla bla bla bla bla',
        },
        {
            id: 3,
            serviceName: 'Labor Room',
            description: 'bla bla bla bla bla bla',
        },
    ]

    return (
        <div className={classes.Services}>
            {servicesList.map(el => {
                return (
                    <ServiceCard heading={el.serviceName} description={el.description} key={el.id} />
                )
            })}
        </div>
    )
}

export default Services
