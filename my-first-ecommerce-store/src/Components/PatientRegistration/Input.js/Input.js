import React, { useEffect } from 'react'
import classes from './Input.css'

const Input = (props) => {
    // useEffect((el => console.log('these', props)), [props])
    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                id={props.elementConfig.id}
                className={classes.Input}
                onChange={props.changed} />;
            break;
        case ('drop-down'):
            inputElement = (
                <select
                    className={classes.Input}
                    id={props.elementConfig.id}
                    {...props.elementConfig}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => {
                        return (
                            <option key={option.value} id={props.key} value={option.value}>{option.displayVal}</option>
                        )
                    })}
                </select>
            )
    }
    return (
        <div className={classes.InputEl}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input
