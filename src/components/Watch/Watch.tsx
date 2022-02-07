import { FC, useEffect, useState } from "react";
import { useTimerContext } from "../../contexts/TimerContext";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

import "./Watch.scss";
interface WatchProps {}

const Watch: FC<WatchProps> = () => {
  const {
    isPaused,
    setIsPaused,
    isWorkTime,
    setIsWorkTime,
    reset,
    setReset,
    defaultWorkMinutes,
    defaultPauseMinutes,
  } = useTimerContext();

  const [minutes, setMinutes] = useState(defaultWorkMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (reset) {
      setSeconds(0);
      setIsPaused(true);

      if (isWorkTime) {
        setMinutes(defaultWorkMinutes);
      } else {
        setMinutes(defaultPauseMinutes);
      }
      setReset(false);
    }

    if (isPaused) {
      return;
    }

    const intervalId = setInterval(() => {
      if (seconds <= 0) {
        if (minutes > 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        } else {
          setSeconds(0);
          if (isWorkTime) {
            setMinutes(defaultPauseMinutes);
          } else {
            setMinutes(defaultWorkMinutes);
          }
          setIsWorkTime(!isWorkTime);
        }
        return;
      }

      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, isWorkTime, seconds, minutes, reset]);

  const displayTimer = (timer: number) => {
    return <span>{Math.floor(timer / 10) === 0 ? "0" + timer : timer}</span>;
  };
  return (
    <div className="watch">
      <div className="counter">
        {displayTimer(minutes)} : {displayTimer(seconds)}
      </div>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </button>
      <ProgressCircle
        progresss={minutes * 60 + seconds}
        defaultSecondsNubmer={
          isWorkTime ? defaultWorkMinutes * 60 : defaultPauseMinutes * 60
        }
      />
    </div>
  );
};

export default Watch;
