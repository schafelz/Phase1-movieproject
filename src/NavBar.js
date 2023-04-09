import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ textDecoration: "None", listStyle: "none" }}>
      <nav>
        <ul>
          <li style={{ textDecoration: "None", listStyle: "none" }}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MovieDatabase">Movie-Search</Link>
          </li>
          <li>
            <Link to="/RandomMovie">Random-Movie</Link>
          </li>
          <li>
            <Link to="/MoviePlot">Movie-Quiz</Link>
          </li>
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
