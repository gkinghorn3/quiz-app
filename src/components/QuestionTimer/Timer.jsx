import { useState, useEffect } from "react";

export default function Timer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(onTimeOut, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(
      () => setRemainingTime((prev) => prev - 100),
      100
    );

    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}
