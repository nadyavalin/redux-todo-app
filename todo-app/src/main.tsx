import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { State } from "./store/state";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={State}>
      <App />
    </Provider>
  </React.StrictMode>,
);
