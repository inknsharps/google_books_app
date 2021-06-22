import React from "react";
import BookBody from "../../Book/BookBody/BookBody";
import BookHeader from "../../Book/BookHeader/BookHeader";
import Button from "../../Button/Button";

const SearchContainer = ({ title, authors, thumbnail, infoLink, description, submitSaveBook }) => {
    return (
        <div className="SearchContainer card p-4">
            <BookHeader title={ title } />
            <BookBody title={ title } authors={ authors } thumbnail={ thumbnail } infoLink={ infoLink } description={ description } />
            <div>
                <Button text="Save" callback={ () => submitSaveBook({ title, authors, infoLink, thumbnail, description }) } />
            </div>
        </div>
    )
};

export default SearchContainer;