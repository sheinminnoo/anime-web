import { useEffect, useRef, useState } from "react";

function useFetch (url , _options) {
    let[data,setData] = useState(null)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)
    let options = useRef(_options).current
        useEffect(()=>{
            let distory = new AbortController();
            let signal = distory.signal;
            console.log(options)
            setLoading(true)
            fetch(url,{
                signal
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                return response.json();
            })
            .then(data=>{
                setData(data)
                setError(null)
                setLoading(false)
            })
            .catch(e=>{
                setError(e.message);
            })
            return()=>{
                distory.abort();
            }
        },[url, options])
    return {
        data,
        loading,
        error
    }
}

export default useFetch;