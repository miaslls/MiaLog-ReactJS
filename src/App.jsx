import "./App.css";

import BusinessCard from "./components/BusinessCard/BusinessCard";
import Calculator from "./components/Calculator/Calculator";
import CreditCards from "./components/CreditCards/CreditCards";
import Journal from "./components/Journal/Journal";
import Letter from "./components/Letter/Letter";
import Notes from "./components/Notes/Notes";
import Planner from "./components/Planner/Planner";

function App() {
  return (
    <main>
      <BusinessCard />
      <Calculator />
      <CreditCards />
      <Journal />
      <Letter />
      <Planner />
      <Notes />
    </main>
  );
}

export default App;
