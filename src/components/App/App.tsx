import TimerContextProvider from "../../contexts/TimerContext";
import Switcher from "../Switcher/Switcher";
import Watch from "../Watch/Watch";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <TimerContextProvider>
        <Switcher />
        <Watch />
      </TimerContextProvider>
    </div>
  );
}

export default App;
