import { FC } from "react";

import "./ProgressCircle.scss";
interface ProgressCirclePropos {
  progresss: number;
  defaultSecondsNubmer: number;
}

export const circonferance = 2 * Math.PI * 49;

const ProgressCircle: FC<ProgressCirclePropos> = ({
  progresss,
  defaultSecondsNubmer,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="progress-circle"
    >
      <circle cx="50" cy="50" r="49" className="track" />
      <circle
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="49"
        className="progress"
        strokeDasharray={circonferance}
        strokeDashoffset={
          circonferance - circonferance * (progresss / defaultSecondsNubmer)
        }
      />
    </svg>
  );
};

export default ProgressCircle;
