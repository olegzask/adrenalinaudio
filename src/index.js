import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BooleanProvider } from "./store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <BooleanProvider>
      <App />
    </BooleanProvider>
  </BrowserRouter>
);
