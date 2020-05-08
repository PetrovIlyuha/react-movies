import React from "react";
import PropTypes from "prop-types";
import Actor from "./elements/SingleMoviePage/Actor";
import Navigation from "./elements/SingleMoviePage/Navigation";
import MovieInfo from "./elements/SingleMoviePage/MovieInfo";
import MovieInfoBar from "./elements/SingleMoviePage/MovieInfoBar";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  const { original_title, runtime, budget, revenue, actors } = movie;
  if (error) return <div>Something went wrong(</div>;
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <>
      <Navigation movie={original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={runtime} budget={budget} revenue={revenue} />
      <Grid>
        {actors.splice(0, 20).map((actor) => (
          <Actor actor={actor} key={actor.credit_id} />
        ))}
      </Grid>
    </>
  );
};

Movie.propTypes = {
  movieId: PropTypes.string,
};

export default Movie;
