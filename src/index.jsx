import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import MiaMood from "./routes/MiaMood/MiaMood";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="MiaMood" element={<MiaMood />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
