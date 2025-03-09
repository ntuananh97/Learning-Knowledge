import React, { useEffect, useRef, useState } from "react";

// Show the current time and have two buttons: Realtime and Stop
// Realtime will show the current time in realtime
// Stop will stop the current time
// The current time should be displayed in the format of HH:MM:SS
const Timer = () => {
  const [dateTime, setDateTime] = useState(() => new Date());
  const timer = useRef();

  useEffect(() => {
    handleShowRealtime();

    return () => {
      stopTimer();
    };
  }, []);

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const handleStop = () => {
    stopTimer();

  };

  const handleShowRealtime = () => {
    setDateTime(new Date());
    timer.current = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  };

  return (
    <div>
      <p>Clock: {dateTime.toLocaleTimeString()}</p>
      <div>
        <button onClick={handleShowRealtime}>Realtime</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
