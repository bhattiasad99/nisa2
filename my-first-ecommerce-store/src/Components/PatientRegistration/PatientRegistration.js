import React, { useState } from 'react'
import Input from './Input.js/Input'
import classes from './PatientRegistration.css'
import axios from 'axios'

const PatientRegistration = (props) => {
    const changeValueHandler = (e) => {
        console.log('hi', e.target)
    }
    const [patientList, setPatientList] = useState([])
    const [patient, setPatient] = useState(
        {
            userid: '',
            pass: '',
            name: '',
            cnic: '',
            contact: '',
            address: '',
            husbandfather: '',
            gender: '',
            isActive: '',
        }
    )

    let patientFormInputData = {

        Name: {
            elemenLabel: 'Name',
            elemenType: 'input',
            elemenConfig: {
                id: 'name',
                type: 'text',
                placeholder: 'Enter your name here',
                required: true,
            },
            value: '',
        },

        
        CNIC: {
            elemenLabel: 'CNIC',
            elemenType: 'input',
            elemenConfig: {
                id: 'cnic',
                type: 'number',
                placeholder: 'Enter CNIC',
            },
            value: '',
        },
        userId: {
            elemenLabel: 'Desired User Name',
            elemenType: 'input',
            elemenConfig: {
                id: 'userid',
                type: 'text',
                placeholder: 'Enter desired userName',
                required: true,
            },
            value: '',
        },
        password: {
            elemenLabel: 'Password',
            elemenType: 'input',
            elemenConfig: {
                id: 'pass',
                type: 'password',
                placeholder: 'Enter password',
                required: true,
            },
            value: '',
        },
        Contact: {
            elemenLabel: 'Contact',
            elemenType: 'input',
            elemenConfig: {
                type: 'number',
                placeholder: 'Enter Phone Number',
                id: 'contact'
            },
            value: '',

        },
        Address: {
            elemenLabel: 'Address',
            elemenType: 'input',
            elemenConfig: {
                type: 'text',
                placeholder: 'Enter Address',
                id: 'address'
            },
            value: '',

        },
        HusbandFather: {
            elemenLabel: "Husband/Father",
            elemenType: 'input',
            elemenConfig: {
                type: 'text',
                placeholder: 'Enter Father/Husbands Name',
                id: 'husbfath'
            },
            value: '',

        },
        Gender: {
            elemenLabel: 'Gender',
            elemenType: 'drop-down',
            value: '',
            elemenConfig: {
                id: 'gender',
                options: [
                    { value: 'Select Gender', displayVal: 'Select Gender' },
                    { value: 'male', displayVal: 'Male' },
                    { value: 'Female', displayVal: 'Female' },
                    { value: 'Other', displayVal: 'Other' },

                ]
            }
        },
        isActiveState: {
            isActive: true,
            type: 'Boolean',
            elemenConfig: { id: 'is-active' }
        }
    }


    const formElementsArray = [];
    for (let key in patientFormInputData) {
        formElementsArray.push(
            {
                id: key,
                config: patientFormInputData[key]
            }
        )
    }

    const handleChange = (e) => {
        let currEntryField = Object.entries(patientFormInputData).find(entry => {
            return (entry[1].elemenConfig.id === e.target.id)
        })
        currEntryField[1].value = e.target.value;
        let getCurrPatient = { ...patient }
        let getRequiredField = Object.keys(getCurrPatient).find(el => (el === currEntryField[1].elemenConfig.id))
        getCurrPatient[getRequiredField] = currEntryField[1].value
        setPatient(getCurrPatient)
    }

    const submitButtonHandler = () => {
        let data = {
            patient: patient
        }
        console.log(patient)
        axios.post('https://nisa-hospital-default-rtdb.firebaseio.com/patients', data.patient).then(res => console.log(res)).catch(err => console.log(err))
    }

    let form = (
        <form className={classes.PatientRegistration}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    inputtype={formElement.config.elemenType}
                    elementConfig={formElement.config.elemenConfig}
                    value={formElement.config.value}
                    label={formElement.config.elemenLabel}
                    changed={handleChange}
                />
            ))}
        </form>
    )
    return (
        <>
            <div className={classes.FormSection}>
                {form}
                <button className={classes.Btn} type="submit" onClick={submitButtonHandler}>Register</button>
            </div>

        </>
    )
}

export default PatientRegistration
