import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./NavBar";
import MoviePlot from "./MovieQuiz";
import Contact from "./Contact";
import Success from "./Success";
import MovieDatabase from "./MovieDatabase";
import AboutUs from "./AboutUs";
import Home from "./Home";
import RandomMovie from "./RandomMovie";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDatabase" element={<MovieDatabase />} />
        <Route path="/RandomMovie" element={<RandomMovie />} />
        <Route path="/MoviePlot" element={<MoviePlot />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/Contact/Success/:name/:email/:concern"
          element={<Success />}
        />
      </Routes>
    </div>
  );
}
