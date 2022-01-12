import { useTimerContext } from "../../contexts/TimerContext";
import Header from "../Header/Header";
import Switcher from "../Switcher/Switcher";
import Watch from "../Watch/Watch";

import "./App.scss";

function App() {
  const { isWorkTime } = useTimerContext();
  return (
    <div className={isWorkTime ? "app work" : "app"}>
      <Header />
      <Switcher />
      <Watch />
    </div>
  );
}

export default App;
