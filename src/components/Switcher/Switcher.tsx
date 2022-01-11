import { FC } from "react";
import { useTimerContext } from "../../contexts/TimerContext";
import "./Switcher.scss";
interface SwitcherPropos {}

const Switcher: FC<SwitcherPropos> = (props) => {
  const { isWorkingTime } = useTimerContext();
  return (
    <div className="switcher">
      <h1>Pomodoro</h1>
      <div className="buttons">
        <button className={isWorkingTime ? "active" : ""}>Work time</button>
        <button className={!isWorkingTime ? "active" : ""}>Pause time</button>
      </div>
    </div>
  );
};

export default Switcher;
