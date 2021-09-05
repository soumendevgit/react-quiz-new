/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export default function Checkbox({className ,text, ...rest}) {
    return (
        <label className={className}>
            <input type="checkbox" {...rest} /> <span>{text}</span>
        </label>
    )
}
