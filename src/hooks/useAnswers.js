import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from 'react';

export default function useAnswers(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [answers, setAnswers] = useState([]);

    useEffect(()=>{
        
        async function fetchAnswers() {
            // database related works
            const db = getDatabase();
            const answerRef = ref(db, `answers/${  videoID  }/questions`);
            const answerQuery = query(
                answerRef, 
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);

                // request firebase database
                const snapshot =  await get(answerQuery);
                setLoading(false);
                
                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => [...prevAnswers, ...Object.values(snapshot.val())]);
                    // console.log(snapshot.val());
                }

                
                
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        setTimeout(()=> {
            fetchAnswers();
        }, 1000);

        
    }, [videoID]);
    return {
        loading, error, answers
    }
}
