import { FC, useEffect, useState } from "react";
import { useTimerContext } from "../../contexts/TimerContext";
import "./Watch.scss";
interface WatchPropos {}

const Watch: FC<WatchPropos> = (props) => {
  const { isPaused, setIsPaused, isWorkingTime, setIsWorkingTime } =
    useTimerContext();

  const [secondTimer, setSecondTimer] = useState(0);
  const [minuteTimer, setMinuteTimer] = useState(1);

  useEffect(() => {
    if (isPaused) {
      return;
    }
    const intervalId = setInterval(() => {
      if (secondTimer <= 0) {
        if (minuteTimer > 0) {
          setSecondTimer(59);
          setMinuteTimer((minuteTimer) => minuteTimer - 1);
        } else {
          setSecondTimer(0);
          setMinuteTimer(1);
          setIsWorkingTime(!isWorkingTime);
        }
        return;
      }
      setSecondTimer((secondTimer) => secondTimer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, isWorkingTime, minuteTimer, secondTimer]);

  const displayTimer = (timer: number) => {
    return <span>{Math.floor(timer / 10) === 0 ? "0" + timer : timer}</span>;
  };
  return (
    <div className="watch">
      <div className="counter">
        {displayTimer(minuteTimer)} : {displayTimer(secondTimer)}
      </div>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </button>
    </div>
  );
};

export default Watch;
