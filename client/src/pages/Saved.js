import React, { useEffect, useState } from "react";
import API from "../utils/API"; 

// Note that for Axios requests, we can directly destructure the data from the response object.
const Saved = () => {
    const [ currentBooks, setCurrentBooks ] = useState([]);
    const [ newBooks, setNewBooks ] = useState([]);

    useEffect(() => {
        API.getSavedBooks()
            .then(({ data }) => setCurrentBooks(data));
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
    };

    const generateBooks = books => {
        console.log(books);
        return books.map(book => <div key={ book._id }>{ book.title }, by { book.authors }, { book.description }</div>)
    };

    return (
        <div className="Saved">
            <h1>This is the Saved page.</h1>
            { generateBooks(currentBooks) }
        </div>
    )
};

export default Saved;