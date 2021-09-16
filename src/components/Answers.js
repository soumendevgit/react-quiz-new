/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';


export default function Answers({options = [], handleChange, input}) {
    // const i =0;
    return (
        <div className={classes.answers}>
            
            {options.map((option, index) =>(
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                    {input ? (
                        // eslint-disable-next-line react/no-array-index-key
                        <Checkbox key={`${index}`} className={classes.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} />
                    ) : (
                        // eslint-disable-next-line react/no-array-index-key
                        // eslint-disable-next-line no-nested-ternary
                        <Checkbox key={`${index}`} className={`${classes.answer} ${option.correct ? classes.correct: option.checked ? classes.wrong : null}`} text={option.title} defaultChecked={option.checked} disabled />
                    )}
                </Fragment>
            ))}
            
        </div>
    )
}
