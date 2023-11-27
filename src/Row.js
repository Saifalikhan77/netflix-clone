import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "" ,{tmdbId: movie.id})
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          console.log("movies",movie);
          return (
            <img key={movie.id} 
            onClick={()=> handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
            alt={movie.name} />
            
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}

    </div>
  );
}

export default Row;
