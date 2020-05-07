import React from "react";
import { Link } from "@reach/router";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt="movie thumbnail" />
        </Link>
      ) : (
        <img src={image} alt="movie thumbnail" />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
