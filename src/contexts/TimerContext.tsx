import { createContext, FC, useContext, useState } from "react";

interface contextInterface {
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isWorkingTime: boolean;
  setIsWorkingTime: React.Dispatch<React.SetStateAction<boolean>>;
}
const timerContext = createContext<contextInterface>({} as contextInterface);
export const useTimerContext = () => {
  return useContext(timerContext);
};
const TimerContextProvider: FC = ({ children }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [isWorkingTime, setIsWorkingTime] = useState(true);
  return (
    <timerContext.Provider
      value={{ isPaused, setIsPaused, isWorkingTime, setIsWorkingTime }}
    >
      {children}
    </timerContext.Provider>
  );
};

export default TimerContextProvider;
