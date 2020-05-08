import React, { useState } from "react";
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from "../config";

// import components
import Grid from "../components/elements/Grid";
import HeroImage from "../components/elements/HeroImage";
import SearchBar from "../components/elements/SearchBar";
import MovieThumb from "../components/elements/MovieThumb";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner";
import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = (lookupTerm) => {
    const endpoint = lookupTerm
      ? SEARCH_BASE_URL + lookupTerm
      : POPULAR_BASE_URL;

    setSearchTerm(lookupTerm);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    fetchMovies(endpoint);
  };

  if (!movies[0]) return <Spinner />;

  if (error)
    return (
      <div>
        Something went Wrong{" "}
        <span role="img" aria-label="grumpy face">
          😕
        </span>{" "}
      </div>
    );
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.title}
          text={heroImage.overview}
        />
      )}

      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
