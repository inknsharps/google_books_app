import React from "react";
import SearchHeader from "../SearchHeader/SearchHeader";
import SearchBody from "../SearchBody/SearchBody";

const SearchContainer = ({ title, authors, thumbnail, infoLink, description }) => {
    return (
        <div className="SearchContainer">
            <SearchHeader title={ title } />
            <SearchBody title={ title } authors={ authors } thumbnail={ thumbnail } infoLink={ infoLink } description={ description } />
        </div>
    )
};

export default SearchContainer;