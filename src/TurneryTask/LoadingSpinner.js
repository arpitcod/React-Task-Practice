// 12. **Loading Spinner**: Show a loading spinner 
// if data is being fetched, otherwise show the data.
import React, { useEffect, useState } from 'react'

const LoadingSpinner = () => {
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() => {
           const getData = "hare krishna";
           setData(getData);
           setLoading(false); 
        }, 1000);
    } ,[])
  return (
    <div>
        {
            loading ? (
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

            ) : (
                <h1>{data}</h1>
            )
        }
    </div>
  )
}

export default LoadingSpinner