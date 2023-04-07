import React, { useEffect, useState } from "react";

function MoviePlot() {
  const [moviePlot, setMoviePlot] = useState(null);
  const [movieTitle, setMovieTitle] = useState(null);
  const [answer, setAnswer] = useState(" ");
  const [result, setResult] = useState(" ");
  const [counter, setCounter] = useState(0);
  const apiKey = "c2fe0fe1&";
  const randomId = Math.floor(Math.random() * 9999) + 1;
  const imdbId = `tt000${String(randomId)}`;

  const getPlot = () => {
    fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=c2fe0fe1&`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie plot");
        }
        return response.json();
      })
      .then((json) => {
        if (json.Plot) {
          setMoviePlot(json.Plot);
        } else {
          console.error("Error fetching movie plot data:", json);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie plot data:", error);
      });
  };

  const getMovieTitle = () => {
    fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie title");
        }
        return response.json();
      })
      .then((json) => {
        if (json.Title) {
          setMovieTitle(json.Title);
        } else {
          console.error("Error fetching movie title data:", json);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie title data:", error);
      });
  };

  const guessHandler = () => {
    if (answer.toLowerCase() === movieTitle.toLowerCase()) {
      setResult("Correct");
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      setResult("Incorrect");
      setCounter(0);
    }
    getMovieTitle();
    getPlot();
  };
  const refresh = () => {
    getMovieTitle();
    getPlot();
  };

  useEffect(() => {
    getPlot();
    getMovieTitle();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h1>Welcome to The Movie Quiz!</h1>
        <p>
          Test your movie knowledge by guessing the plot of various movies. Each
          correct answer earns you a point, while an incorrect answer resets
          your score. Good luck!
        </p>
      </div>
      {moviePlot ? (
        <div>
          {movieTitle && (
            <h2>{/* Movie IMDb ID: {imdbId} {movieTitle} CheatCode*/}</h2>
          )}
          <h3>Plot:</h3>
          <p>{moviePlot}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={guessHandler}>Guess</button>
        <div>
          {result} <br />
          Score: {counter}
        </div>
        <button onClick={refresh}>Refresh</button>
      </div>
    </div>
  );
}

export default MoviePlot;
