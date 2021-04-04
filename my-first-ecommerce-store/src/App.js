import React, { useState, useEffect } from 'react'
import classes from './App.css';
import Nav from './Containers/Nav/Nav';
import Header from './Containers/Header/Header';
import Services from './Components/Services/Services'
import ConsultantsList from './Components/ConsultantsList/ConsultantsList'
import { BrowserRouter } from 'react-router-dom';
import GetAppointment from './Containers/GetAppointment/GetAppointment';
import Aux from './hoc/React-Aux';
import Footer from './Components/Footer/Footer'

function App() {
  const [showAppointmentBox, setShowAppointmentBox] = useState(false)
  const scrollToAppointment = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  const toggleAppointmentBox = (e) => {
    console.log(e.target.id, 'this is the target')
    // if (e.target.nodeName === 'SPAN' || e.target.nodeName === 'BUTTON') {
    //   let action = (!showAppointmentBox) ? setShowAppointmentBox(true) : null
    // }
    if (e.target.id === 'backDrop') {
      let action = (showAppointmentBox) ? setShowAppointmentBox(false) : null
    }

    if (e.target.id === 'quick-appointment') {
      let action = (!showAppointmentBox) ? setShowAppointmentBox(true) : null
    }
    // if (e.target.nodeName !== '')
    // const effect = (!showAppointmentBox) ? setShowAppointmentBox(true) : null
  }

  const navLinks = [
    {
      name: 'Home',
      actionClick: null,
      id: 'home'
    },
    {
      name: 'About',
      actionClick: null,
      id: 'about'
    },
    {
      name: 'Services',
      actionClick: null,
      id: 'services'
    },
    {
      name: 'Doctors',
      actionClick: null,
      id: 'doctors'
    },
    {
      name: 'Contact',
      actionClick: null,
      id: 'contact'
    },
    {
      name: 'Quick Appointment',
      actionClick: toggleAppointmentBox,
      id: 'quick-appointment'
    }
  ]
  return (
    <BrowserRouter>
      <div className={classes.App} onClick={toggleAppointmentBox}>
        <Nav links={navLinks} forScrollingToTop={scrollToAppointment} />
        <Header clicked={toggleAppointmentBox} />
        <Services />
        <ConsultantsList />
        <Footer links={navLinks} forScrollingToTop={scrollToAppointment} />
        {showAppointmentBox && (
          <Aux>
            <GetAppointment />
            <div className={classes.Hidden} id="backDrop"></div>
          </Aux>)}
      </div>
    </BrowserRouter>
  );
}

export default App;

// for parallax effect :D
  // const [offSetY, setOffSetY] = useState(0)

  // const handleScroll = () => {
  //   const currentPosition = window.pageYOffset
  //   console.log(currentPosition, 'offSetY')
  //   return setOffSetY(currentPosition)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])