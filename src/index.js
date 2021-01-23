import { StrictMode } from "react";
import ReactDOM from "react-dom";
import img from "./Assets/bg-pattern.svg";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1366px 300px"
      }}
    >
      <App />
    </div>
  </StrictMode>,
  rootElement
);
