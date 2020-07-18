import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Requests";

import './banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetechData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) // looking for image  for banner
        ]
      );
      return request;
    }
    fetechData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPostion: "center center",
      }}
    >
      <div className="banner__contents">
        

        {/* title */}
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* div =>  buttons */}
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>


        {/* description */}
        <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
