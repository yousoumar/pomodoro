import { FC } from "react";
import { useTimerContext } from "../../contexts/TimerContext";
import "./Switcher.scss";
interface SwitcherProps {}

const Switcher: FC<SwitcherProps> = () => {
  const { isWorkTime, setIsWorkTime, setReset } = useTimerContext();
  return (
    <div className="switcher">
      <div className="buttons">
        <button
          style={{ cursor: !isWorkTime ? "pointer" : "default" }}
          className={isWorkTime ? "active" : ""}
          onClick={() => {
            if (!isWorkTime) {
              setReset(true);
              setIsWorkTime(true);
            }
          }}
        >
          Work time
        </button>
        <button
          className={!isWorkTime ? "active" : ""}
          style={{ cursor: isWorkTime ? "pointer" : "default" }}
          onClick={() => {
            if (isWorkTime) {
              setReset(true);
              setIsWorkTime(false);
            }
          }}
        >
          Pause time
        </button>
      </div>
    </div>
  );
};

export default Switcher;
