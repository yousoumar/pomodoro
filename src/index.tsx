import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import TimerContextProvider from "./contexts/TimerContext";

ReactDOM.render(
  <React.StrictMode>
    <TimerContextProvider>
      <App />
    </TimerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
