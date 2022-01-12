import { FC } from "react";
import { useTimerContext } from "../../contexts/TimerContext";
import "./Switcher.scss";
interface SwitcherPropos {}

const Switcher: FC<SwitcherPropos> = () => {
  const { isWorkTime, setIsWorkTime, setReset } = useTimerContext();
  return (
    <div className="switcher">
      <div className="buttons">
        <button
          className={isWorkTime ? "active" : ""}
          onClick={() => {
            setReset(true);
            setIsWorkTime(true);
          }}
        >
          Work time
        </button>
        <button
          className={!isWorkTime ? "active" : ""}
          onClick={() => {
            setReset(true);
            setIsWorkTime(false);
          }}
        >
          Pause time
        </button>
      </div>
    </div>
  );
};

export default Switcher;
