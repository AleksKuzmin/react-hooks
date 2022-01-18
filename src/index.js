import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StateHooks from "./components/StateHooks";
import EffectHook from "./components/EffectHook";
import RefHook from "./components/RefHook";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StateHooks />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <EffectHook />

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    
    <RefHook />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
