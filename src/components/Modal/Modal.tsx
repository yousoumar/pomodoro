import { FC } from "react";
import { useTimerContext } from "../../contexts/TimerContext";

import "./Modal.scss";

interface ModalPropos {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalPropos> = ({ setShowModal }) => {
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
              type="number"
              name="work"
              defaultValue={defaultWorkMinutes}
            />
          </div>
          <div className="group">
            <span>Pause minutes</span>
            <input
              type="number"
              name="pause"
              defaultValue={defaultPauseMinutes}
            />
          </div>
        </div>
        <button className="active">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="check-circle"
            className="svg-inline--fa fa-check-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Modal;
