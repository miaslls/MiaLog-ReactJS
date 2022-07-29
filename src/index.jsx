import React from "react";
import ReactDOM from "react-dom";

import "./assets/CSS/index.css";
import "./assets/CSS/reset.css";

import BusinessCard from "./components/BusinessCard";
import Calculator from "./components/Calculator";
import CreditCards from "./components/CreditCards";
import Journal from "./components/Journal";
import Letter from "./components/Letter";
import Notes from "./components/Notes";
import Planner from "./components/Planner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main>
      <BusinessCard />
      <Calculator />
      <CreditCards />
      <Journal />
      <Letter />
      <Planner />
      <Notes />
    </main>
  </React.StrictMode>
);
