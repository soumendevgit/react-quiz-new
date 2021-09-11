/* eslint-disable react/button-has-type */
import React from 'react'
import classes from '../styles/Button.module.css'

export default function Button({type ,className, children}) {
    return (
        <button type={type} className={`${classes.button} ${className}`}>
            {children}
        </button>
    )
}
