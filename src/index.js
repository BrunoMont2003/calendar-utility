import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MyContextProvider } from "./context/MyContext";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <MyContextProvider>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </MyContextProvider>
);
