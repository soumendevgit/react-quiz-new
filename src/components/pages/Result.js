/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Analysis';
import Summary from '../Summary';

export default function Result() {

    const {id} = useParams();
    const {location} = useHistory();
    const {state}   = location;
    const {qna} = state;

    const {loading, error, answers} = useAnswers();

    // function calculate() {
    //     const score = 0;
    //     answers.forEach((question, index1) => {
    //         const correctIndexes = [];
    //         const checkedIndex = [];
            
    //     });
    // }


    return (
        <>

            {loading && <div>Loading...</div>}
            {error && <div>There was an error!...</div>}

            {answers && answers.length > 0 && (
                <>
                    <Summary />
                    <Analysis />
                </>
            )}

            
        </>
    )
}
