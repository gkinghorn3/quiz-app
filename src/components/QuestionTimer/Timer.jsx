import { useState, useEffect } from "react";


export default function Timer({ timeOut, onTimeOut }) {
     
    const [remainingTime, setRemainingTime] = useState(timeOut);
    

    useEffect(() => {
        console.log('setting timeout');
        setTimeout(onTimeOut, timeOut);
    }, [onTimeOut, timeOut]);

    useEffect(() => {
        console.log('setting interval');
        setInterval(
            () => setRemainingTime((prev) => prev - 100),
            100
        );
    }, [])

  

    return <progress id='question-time' max={timeOut} value={remainingTime}/>

}