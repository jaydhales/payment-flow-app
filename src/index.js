import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { InfoContextProvider } from "./Contexts/InfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfoContextProvider>
      <Router>
        <App />
      </Router>
    </InfoContextProvider>
  </React.StrictMode>
);
