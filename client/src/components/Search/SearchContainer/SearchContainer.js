import React from "react";
import BookBody from "../../Book/BookBody/BookBody";
import BookHeader from "../../Book/BookHeader/BookHeader";
import Button from "../../Button/Button";

const SearchContainer = ({ title, authors, thumbnail, infoLink, description, submitSaveBook }) => {
    return (
        <div className="SearchContainer">
            <BookHeader title={ title } />
            <BookBody title={ title } authors={ authors } thumbnail={ thumbnail } infoLink={ infoLink } description={ description } />
            <Button text="Save" callback={ () => submitSaveBook({ title, authors, infoLink, thumbnail, description }) } />
        </div>
    )
};

export default SearchContainer;