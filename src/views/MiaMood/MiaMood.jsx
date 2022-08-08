import { useState, UseEffect, useEffect } from "react";

import "./MiaMood.css";
import MoodService from "../../services/MoodService";

import BusinessCard from "../../components/BusinessCard/BusinessCard";
import Calculator from "../../components/Calculator/Calculator";
import CreditCards from "../../components/CreditCards/CreditCards";
import Journal from "../../components/Journal/Journal";
import Letter from "../../components/Letter/Letter";
import Notes from "../../components/Notes/Notes";
import Planner from "../../components/Planner/Planner";

function allMoods() {
  const [moods, setMoods] = useState([]);
}

useEffect(() => {
  getAllMoods();
}, []);

const getAllMoods = async () => {
  const response = await MoodService.getAllMoods();
  setMoods(response);
};
