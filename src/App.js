import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./NavBar";
import MoviePlot from "./MovieQuiz";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MoviePlot" element={<MoviePlot />} />
      </Routes>
    </div>
  );
}
