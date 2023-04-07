import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"; 

const MovieDatabase = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (movieName !== "") {
      axios
        .get(`https://www.omdbapi.com/?apikey=5bf96c34&t=${movieName}`)
        .then((response) => {
          setMovieData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [movieName]);

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Movie Database</h1>
      <input
        type="text"
        value={movieName}
        onChange={handleMovieNameChange}
        placeholder="Enter movie name"
        className="input"
      />
      {movieData ? (
        <div className="movieInfo">
          <h2>{movieData.Title}</h2>
          <img src={movieData.Poster} alt="Movie Poster" className="poster" />
          <p>Released: {movieData.Released}</p>
          <p>Director: {movieData.Director}</p>
          <p>Actors: {movieData.Actors}</p>
          <p>Plot: {movieData.Plot}</p>
        </div>
      ) : (
        <p className="noMovie">No movie found.</p>
      )}
    </div>
  );
};

export default MovieDatabase;
