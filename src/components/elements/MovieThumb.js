import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img className="clickable" src={image} alt="movie image thumbnail" />
      ) : (
        <img src={image} alt="movie thumbnail" />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
