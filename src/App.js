import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./NavBar";
import MoviePlot from "./MovieQuiz";
import Contact from "./Contact"
import Success from "./Success";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/MoviePlot" element={<MoviePlot />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Contact/Success/:name/:email/:concern" element={<Success/>} />
      </Routes>
    </div>
  );
}
