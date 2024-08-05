import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          let { hours, minutes, seconds, milliseconds } = prevTimer;

          milliseconds += 10;
          if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
          }
          if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
          }
          if (minutes >= 60) {
            minutes = 0;
            hours += 1;
          }

          return { hours, minutes, seconds, milliseconds };
        });
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleClick = () => {
    setRunning(true);
  };

  const handleStopClick = () => {
    setRunning(false);
  };

  const resetBtn = () => {
    setRunning(false);
    setTimer({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  };

  const padZero = (num, length = 2) => String(num).padStart(length, "0");

  const formatMilliseconds = (ms) => padZero(Math.floor(ms / 10), 2);

  return (
    <>
      <div className="text-center mt-20">
        <h1 className="">Enter to start the Timer</h1>
        <button onClick={handleClick} className="bg-green-500 text-white hover:bg-green-600 focus:ring-green-300">Start Timer</button>
        <button onClick={handleStopClick} className="m-5 bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300">Pause Timer</button>
        <button onClick={resetBtn} className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-300">Reset Timer</button>
        <h1 className="text-7xl">
          {padZero(timer.hours)}:{padZero(timer.minutes)}:
          {padZero(timer.seconds)}.{formatMilliseconds(timer.milliseconds)}
        </h1>
      </div>
    </>
  );
}

export default Timer;
