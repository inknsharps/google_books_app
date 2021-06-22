import React from "react";
import BookBody from "../Book/BookBody/BookBody";
import BookHeader from "../Book/BookHeader/BookHeader";

const SavedBooksContainer = ({ title, authors, thumbnail, infoLink, description }) => {
    return (
        <div className="SavedBooksContainer">
            <BookHeader title={ title } />
            <BookBody title={ title } authors={ authors } thumbnail={ thumbnail } infoLink={ infoLink } description={ description } />
        </div>
    )
};

export default SavedBooksContainer;