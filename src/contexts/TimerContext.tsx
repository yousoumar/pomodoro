import { createContext, FC, useContext, useState } from "react";

interface contextInterface {
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isWorkingTime: boolean;
  setIsWorkingTime: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
}
const timerContext = createContext<contextInterface>({} as contextInterface);
export const useTimerContext = () => {
  return useContext(timerContext);
};
const TimerContextProvider: FC = ({ children }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [isWorkingTime, setIsWorkingTime] = useState(true);
  const [reset, setReset] = useState(false);
  return (
    <timerContext.Provider
      value={{
        isPaused,
        setIsPaused,
        isWorkingTime,
        setIsWorkingTime,
        reset,
        setReset,
      }}
    >
      {children}
    </timerContext.Provider>
  );
};

export default TimerContextProvider;
