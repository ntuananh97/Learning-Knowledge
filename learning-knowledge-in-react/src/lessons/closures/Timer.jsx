import React, { useState } from 'react'

const Timer = () => {
    const [_, setForceRender] = useState(0);
    console.log('Timer render');
    
    const forceRender = () => {
        console.log("forceRender");
        setForceRender(Math.random());
    }
    let startTime = null;
    const startTimer  = () => {
        startTime = new Date();
    }
    const viewTime  = () => {
        const currentTime = new Date();
        console.log(currentTime - startTime);
        console.log("startTime", startTime);
    }
  return (
    <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={viewTime}>View time</button>
        <button onClick={forceRender}>Force render</button>
    </div>
  )
}

export default Timer