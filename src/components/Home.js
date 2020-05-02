import React, { useState, useEffect } from "react";
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
const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
