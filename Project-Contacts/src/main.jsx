import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Router
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
