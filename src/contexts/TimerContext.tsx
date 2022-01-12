import { createContext, FC, useContext, useState } from "react";
import TypedLocalStore from "typed-local-store";

interface storageInterface {
  pauseMinutes: number;
  workMinutes: number;
}

interface contextInterface {
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isWorkTime: boolean;
  setIsWorkTime: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  defaultPauseMinutes: number;
  defaultWorkMinutes: number;
  updateMinutesNumber: (type: "work" | "pause", newTimeNumber: number) => void;
}
const timerContext = createContext<contextInterface>({} as contextInterface);
export const useTimerContext = () => {
  return useContext(timerContext);
};

const TimerContextProvider: FC = ({ children }) => {
  const typedStorage = new TypedLocalStore<storageInterface>();
  const [defaultWorkMinutes, setDefaultWorkMinutes] = useState(
    getMinutesNumber("workMinutes")
  );

  const [defaultPauseMinutes, setDefaultPauseMinutes] = useState(
    getMinutesNumber("pauseMinutes")
  );
  const [isPaused, setIsPaused] = useState(true);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [reset, setReset] = useState(false);

  function getMinutesNumber(key: "workMinutes" | "pauseMinutes") {
    let sotoredMinutes: number | null;
    try {
      sotoredMinutes = typedStorage.getItem(key);
    } catch (error) {
      typedStorage.setItem(key, 1);
      return 1;
    }
    if (!sotoredMinutes) {
      return 1;
    }
    return sotoredMinutes;
  }
  const updateMinutesNumber = (
    type: "work" | "pause",
    newMinutesNumber: number
  ) => {
    if (type === "work") {
      typedStorage.setItem("workMinutes", newMinutesNumber);
      setDefaultWorkMinutes(newMinutesNumber);
    } else {
      setDefaultPauseMinutes(newMinutesNumber);
      typedStorage.setItem("pauseMinutes", newMinutesNumber);
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
        defaultWorkMinutes,
        defaultPauseMinutes,
        updateMinutesNumber,
      }}
    >
      {children}
    </timerContext.Provider>
  );
};

export default TimerContextProvider;
