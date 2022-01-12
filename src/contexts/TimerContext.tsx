import { createContext, FC, useContext, useState } from "react";

interface contextInterface {
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isWorkTime: boolean;
  setIsWorkTime: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  defaultPausingMinutes: number;
  defaultWorkingMinutes: number;
  updateMinutesNumber: (type: "work" | "pause", newTimeNumber: number) => void;
}
const timerContext = createContext<contextInterface>({} as contextInterface);
export const useTimerContext = () => {
  return useContext(timerContext);
};

const TimerContextProvider: FC = ({ children }) => {
  const [defaultWorkingMinutes, setDefaultWorkingMinutes] = useState(1);
  const [defaultPausingMinutes, setDefaultPausingMinutes] = useState(1);
  const [isPaused, setIsPaused] = useState(true);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [reset, setReset] = useState(false);

  const updateMinutesNumber = (
    type: "work" | "pause",
    newMinutesNumber: number
  ) => {
    if (type === "work") {
      setDefaultWorkingMinutes(newMinutesNumber);
    } else {
      setDefaultPausingMinutes(newMinutesNumber);
    }
  };
  return (
    <timerContext.Provider
      value={{
        isPaused,
        setIsPaused,
        isWorkTime,
        setIsWorkTime,
        reset,
        setReset,
        defaultWorkingMinutes,
        defaultPausingMinutes,
        updateMinutesNumber,
      }}
    >
      {children}
    </timerContext.Provider>
  );
};

export default TimerContextProvider;
