import React, { useState } from "react";
import axios from "axios";

const apiKey = "5bf96c34";

const RandomMovie = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  const handleClick = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=random`)
      .then((response) => {
        const randomIndex = Math.floor(
          Math.random() * response.data.Search.length
        );
        const randomMovieID = response.data.Search[randomIndex].imdbID;
        return axios.get(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${randomMovieID}`
        );
      })
      .then((response) => {
        setRandomMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1> Random Movie Page </h1>
      <p>
        Have you ever been overwhelmed with all of the movies you can watch.
        Click the button for a quick movie reccommendation.
      </p>
      <button onClick={handleClick}>Get Random Movie</button>
      {randomMovie && (
        <div>
          <h2>{randomMovie.Title}</h2>
          <img src={randomMovie.Poster} alt={randomMovie.Title} />
          <p>Released: {randomMovie.Released}</p>
          <p>Director: {randomMovie.Director}</p>
          <p>Actors: {randomMovie.Actors}</p>
          <p>Plot: {randomMovie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default RandomMovie;
