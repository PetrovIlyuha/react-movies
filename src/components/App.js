import React from "react";
import { Router } from "@reach/router";

import Header from "../components/elements/Header";
import NotFound from "../components/NotFound";
import Movie from "../components/Movie";
import Home from "../components/Home";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
  </>
);

export default App;
