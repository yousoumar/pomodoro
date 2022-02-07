import { FC } from "react";
import { useTimerContext } from "../../contexts/TimerContext";

import "./Modal.scss";

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ setShowModal }) => {
  const {
    defaultPauseMinutes,
    defaultWorkMinutes,
    updateMinutesNumber,
    setReset,
  } = useTimerContext();
  return (
    <div className="modal">
      <form
        className="box"
        onSubmit={(e) => {
          e.preventDefault();
          updateMinutesNumber(
            "work",
            parseInt(e.currentTarget.work.value.trim())
          );
          updateMinutesNumber(
            "pause",
            parseInt(e.currentTarget.pause.value.trim())
          );
          setShowModal(false);
          setReset(true);
        }}
      >
        <h2>
          You wanna change some settings ? <br /> We got this !
        </h2>
        <div className="row">
          <div className="group">
            <span>Work minutes</span>
            <input
              min={1}
              max={60}
              type="number"
              name="work"
              defaultValue={defaultWorkMinutes}
            />
          </div>
          <div className="group">
            <span>Pause minutes</span>
            <input
              min={1}
              max={60}
              type="number"
              name="pause"
              defaultValue={defaultPauseMinutes}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="active" type="submit">
            Done
          </button>
          <button className="cancel" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
