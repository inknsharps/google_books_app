import React from "react";
import BookBody from "../../Book/BookBody/BookBody";
import BookHeader from "../../Book/BookHeader/BookHeader";

const SearchContainer = ({ title, authors, thumbnail, infoLink, description }) => {
    return (
        <div className="SearchContainer">
            <BookHeader title={ title } />
            <BookBody title={ title } authors={ authors } thumbnail={ thumbnail } infoLink={ infoLink } description={ description } />
        </div>
    )
};

export default SearchContainer;