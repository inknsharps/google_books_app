import React from "react";
import BookBody from "../Book/BookBody/BookBody";
import BookHeader from "../Book/BookHeader/BookHeader";
import Button from "../Button/Button";

const SavedBooksContainer = ({ id, title, authors, thumbnail, infoLink, description, deleteBook }) => {
    return (
        <div className="SavedBooksContainer card p-4">
            <BookHeader title={ title } />
            <BookBody title={ title } authors={ authors } thumbnail={ thumbnail } infoLink={ infoLink } description={ description } />
            <div>
                <Button text="Delete" callback={() => deleteBook(id) }/>
            </div>
        </div>
    )
};

export default SavedBooksContainer;