/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import classes from '../styles/Form.module.css'

export default function Form({children, ...rest}) {
    return (
        <form action="#" className={`${classes.form}`} {...rest}>
            {children}
        </form>
    )
}
