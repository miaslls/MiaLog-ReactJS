import React from "react";
import ReactDOM from "react-dom";

import BusinessCard from "./components/BusinessCard";
import Calculator from "./components/Calculator";
import CreditCards from "./components/CreditCards";
import Journal from "./components/Journal";
import Letter from "./components/Letter";
import Notes from "./components/Notes";
import Planner from "./components/Planner";

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById("root")
);
