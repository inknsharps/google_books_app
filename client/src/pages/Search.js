import React, { useState } from "react";
import SearchContainer from "../components/Search/SearchContainer/SearchContainer";
import Button from "../components/Button/Button";
import API from "../utils/API"; 

const Search = () => {
    const [ results, setResults ] = useState([]);
    const [ input, setInput ] = useState("");

    const handleInput = event => {
        console.log(event.target.value);
        setInput(event.target.value);
    };

    // Destructure the Axios request as usual, then the Google Books API returns its results in a item property
    const submitSearch = query => {
        API.getGoogleBooks(query)
            .then(({ data: { items } }) => {
                console.log(items);
                setResults(items);
            });
    };

    // We use event.target[0] because that's the input element we want to get the search query from in the event
    const handleSearch = event => {
        event.preventDefault();
        const query = event.target[0].value;
        if (query !== "") {
            return submitSearch(query);
        };
        return alert("You must provide a search query!");
    };

    // Destructured values relate to how the Google Books API response object is structured
    const generateResults = results => {
        return results.map(result => {
            const { id, volumeInfo: { authors, description, imageLinks: { thumbnail }, title, infoLink } } = result;
            return <SearchContainer key={ id } authors={ authors } description={ description } thumbnail={ thumbnail } title={ title } infoLink={ infoLink } />
        });
    };

    return (
        <div className="Search">
            <h1>This is the Search page.</h1>
            <form id="search-form" onSubmit={ handleSearch }>
                <input type="text" placeholder="Search Query..." value={ input } onChange={ handleInput }></input>
                <Button name="search" text="Search" type="submit" form="search-form" />
            </form>
            { generateResults(results) }
        </div>
    )
};

export default Search;