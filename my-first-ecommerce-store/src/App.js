import React, { useState, useEffect } from 'react'
import classes from './App.css';
import Nav from './Containers/Nav/Nav';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GetAppointment from './Containers/GetAppointment/GetAppointment';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import PatientRegistration from './Components/PatientRegistration/PatientRegistration'

function App() {
  // quick appointment box
  const [showAppointmentBox, setShowAppointmentBox] = useState(false)

  const toggleAppointmentBox = (e) => {
    console.log(e.target.id, 'this is the target')
    if (e.target.id === 'backDrop') {
      let action = (showAppointmentBox) ? setShowAppointmentBox(false) : null
    }
    if (e.target.id === 'quick-appointment') {
      let action = (!showAppointmentBox) ? setShowAppointmentBox(true) : null
    }
  }

  const scrollToFunction = (e) => {
    let action = null;
    action = (e.target.id === 'scrollTop') ? window.scrollTo({ top: 0, behavior: 'smooth' }) : null
    action = (e.target.id === 'services') ? window.scrollTo({ top: 652, behavior: 'smooth' }) : null
    action = (e.target.id === 'doctors') ? window.scrollTo({ top: 1448, behavior: 'smooth' }) : null
  }

  const navLinks = [
    {
      name: 'Home',
      actionClick: null,
      id: 'home',
      path: '/',
      pathType: 'exact',
    },
    {
      name: 'About',
      actionClick: null,
      path: '/about',
      id: 'about'
    },
    {
      name: 'Services',
      actionClick: scrollToFunction,
      id: 'services'
    },
    {
      name: 'Doctors',
      actionClick: scrollToFunction,
      id: 'doctors'
    },
    {
      name: 'Contact',
      path: '/contact-us',
      actionClick: null,
      id: 'contact'
    },
    {
      name: 'Quick Appointment',
      actionClick: toggleAppointmentBox,
      id: 'quick-appointment'
    }
  ]

  const doctorsFormContents = {
    name: {
      label: 'Name',
      type: 'string',
      value: '',
      required: true
    },
    id: {
      label: 'ID',
      type: 'number',
      value: null,
      required: true
    },
    image: {
      label: 'Photograph',
      type: 'image',
      value: '',
      required: false
    },

    specialityAddBtn: {
      type: 'button',
      value: '',
      required: false,
    },
    specialityAddInp: {
      label: 'Add Speciality',
      value: '',
      type: 'string',
      required: false,
    },
    speciality: {
      label: 'Select Specialization',
      type: 'drop-down',
      value: '',
      required: false
    },
    timings: {
      label: 'Timings',
      type: 'time-select',
      value: {
        type: 'time-format',
        from: '',
        to: '',
      },
      required: true
    },
    contactNum: {
      label: 'Contact Number',
      type: 'number',
      value: null,
      required: true
    },
    pmcNumber: {
      label: 'PMDC Number',
      type: 'string',
      value: '',
      required: true
    },
    pmcNumberIsValid: {
      label: 'Expiry',
      type: 'MM/YYYY',
      value: '',
      required: true
    }
  }




  


  return (
    <Router>
      <>

        <Nav links={navLinks} />
        {/* appointment box toggler */}
        {showAppointmentBox && (
          <>
            <GetAppointment />
            <div className={classes.Hidden} id="backDrop" onClick={toggleAppointmentBox}></div>
          </>)}
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path='/' component={Home} />
          <Route exact path='/patient-registration' component={PatientRegistration} />
          {/* register */}
        </Switch>
        <Footer links={navLinks} appointmentBtn={scrollToFunction} />
      </>
    </Router>
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