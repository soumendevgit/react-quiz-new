import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from 'react';

export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        
        async function fetchVideos() {
            // database related works
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(
                videosRef, 
                orderByKey(), startAt(`${  page}`), limitToFirst(8)
            );

            try {
                setError(false);
                setLoading(true);

                // request firebase database
                const snapshot =  await get(videoQuery);
                setLoading(false);
                
                if (snapshot.exists()) {
                    setVideos((prevVideos) => [...prevVideos, ...Object.values(snapshot.val())]);
                } else {
                    setHasMore(false);
                }

                // console.log(snapshot.val());
                
                
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        setTimeout(()=> {
            fetchVideos();
        }, 500);

        
    }, [page]);
    return {
        loading, error, videos, hasMore
    }
}
