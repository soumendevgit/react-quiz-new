import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from 'react';

export default function useQuestions(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        
        async function fetchQuestions() {
            // database related works
            const db = getDatabase();
            const quizRef = ref(db, `quiz/${  videoID  }/questions`);
            const quizQuery = query(
                quizRef, 
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);

                // request firebase database
                const snapshot =  await get(quizQuery);
                setLoading(false);
                
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => [...prevQuestions, ...Object.values(snapshot.val())]);
                    // console.log(snapshot.val());
                }

                
                
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        setTimeout(()=> {
            fetchQuestions();
        }, 1000);

        
    }, [videoID]);
    return {
        loading, error, questions
    }
}
