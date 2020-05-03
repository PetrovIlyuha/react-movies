import React, { useState } from "react";
import {
  API_KEY,
  API_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
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
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${
      currentPage + 1
    } `;
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      currentPage + 1
    }`;
    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    fetchMovies(endpoint);
  };

  if (!movies[0]) return <Spinner />;

  if (error) return <div>Something went Wrong 😕</div>;
  return (
    <>
      {heroImage && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.title}
          text={heroImage.overview}
        />
      )}
      <SearchBar />
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
