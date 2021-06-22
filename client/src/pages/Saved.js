import React, { useEffect, useState } from "react";
import SavedBooksContainer from "../components/SavedBooks/SavedBooksContainer";
import API from "../utils/API"; 

// Note that for Axios requests, we can directly destructure the data from the response object.
const Saved = () => {
    const [ currentBooks, setCurrentBooks ] = useState([]);
    const [ newBooks, setNewBooks ] = useState([]);

    useEffect(() => {
        API.getSavedBooks()
            .then(({ data }) => setCurrentBooks(data))
            .catch(err => console.log(err));
    }, [newBooks]);

    // Attach this function to some event handler later
    const deleteBook = id => {
        API.deleteBook(id)
            .then(({ data: response }) => {
                if (response.ok && response.deletedCount) {
                    API.getSavedBooks()
                        .then(({ data }) => setNewBooks(data));
                }
            })
            .catch(err => console.log(err));
    };

    const generateBooks = books => {
        console.log(books);
        return books.map(book => {
            const { _id, title, authors, description, image, link } = book;
            return <SavedBooksContainer key={ _id } id={ _id } title={ title } authors={ authors } thumbnail={ image } infoLink={ link } description={ description } deleteBook={ deleteBook }/>
        });
    };

    return (
        <div className="Saved container">
            <h2>Your Saved Books</h2>
            { generateBooks(currentBooks) }
        </div>
    )
};

export default Saved;