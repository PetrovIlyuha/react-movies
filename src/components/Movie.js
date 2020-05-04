import React from "react";
import Actor from "./elements/SingleMoviePage/Actor";
import Navigation from "./elements/SingleMoviePage/Navigation";
import MovieInfo from "./elements/SingleMoviePage/MovieInfo";
import MovieInfoBar from "./elements/SingleMoviePage/MovieInfoBar";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

const Movie = ({ movieId }) => {
  return (
    <>
      <Navigation />
      <MovieInfo />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
      <Spinner />
    </>
  );
};

export default Movie;
