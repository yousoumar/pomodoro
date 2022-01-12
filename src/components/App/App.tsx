import TimerContextProvider from "../../contexts/TimerContext";
import Header from "../Header/Header";
import Switcher from "../Switcher/Switcher";
import Watch from "../Watch/Watch";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <TimerContextProvider>
        <Header />
        <Switcher />
        <Watch />
      </TimerContextProvider>
    </div>
  );
}

export default App;
