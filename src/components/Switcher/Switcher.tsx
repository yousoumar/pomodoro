import { FC } from "react";
import { useTimerContext } from "../../contexts/TimerContext";
import "./Switcher.scss";
interface SwitcherPropos {}

const Switcher: FC<SwitcherPropos> = () => {
  const { isWorkingTime, setIsWorkingTime, setReset } = useTimerContext();
  return (
    <div className="switcher">
      <h1>Pomodoro</h1>
      <div className="buttons">
        <button
          className={isWorkingTime ? "active" : ""}
          onClick={() => {
            setReset(true);
            setIsWorkingTime(true);
          }}
        >
          Work time
        </button>
        <button
          className={!isWorkingTime ? "active" : ""}
          onClick={() => {
            setReset(true);
            setIsWorkingTime(false);
          }}
        >
          Pause time
        </button>
      </div>
    </div>
  );
};

export default Switcher;
