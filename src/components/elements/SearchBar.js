import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const timeOut = useRef(null);

  const handleMovieSearch = (e) => {
    clearTimeout(timeOut.current);
    setSearchTerm(e.target.value);
    timeOut.current = setTimeout(() => {
      callback(searchTerm);
    }, 500);
  };
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie..."
          onChange={handleMovieSearch}
          value={searchTerm}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
