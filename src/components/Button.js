/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react'
import classes from '../styles/Button.module.css'

export default function Button({type ,className, children, ...rest}) {
    return (
        <button type={type} className={`${classes.button} ${className}`} {...rest}>
            {children}
        </button>
    )
}
