import React, { useState } from "react";
import API from "../utils/API"; 

const Search = () => {
    const [ results, setResults ] = useState([]);

    // Destrcucture the Axios request as usual, then the Google Books API returns its results in a item property
    // Make sure to grab the value for the query from state later
    const submitSearch = query => {
        API.getGoogleBooks(query)
            .then(({ data: { items } }) => {
                console.log(items);
                setResults(items);
            })
    };

    const generateResults = results => results.map(result => <div key={ result.id }>{ result.volumeInfo.title }</div>);

    return (
        <div className="Search">
            <h1>This is the Search page.</h1>
            { generateResults(results) }
            <button onClick={() => submitSearch("flowers")}></button>
        </div>
    )
};

export default Search;