import React from "react";
import Header from "../components/elements/Header";
import Home from "../components/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Home />
  </>
);

export default App;
