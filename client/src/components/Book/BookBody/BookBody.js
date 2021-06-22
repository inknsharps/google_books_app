import React from "react";

const BookBody = ({ title, authors, thumbnail, infoLink, description}) => {
    return (
        <div className="BookBody">
            <p> Authors: { authors }</p>
            <img src={ thumbnail } alt={ `${title}-thumbnail` }></img>
            <p> Description: { description }</p>
            <a href={ infoLink } target="_blank" rel="noreferrer">Google Books Link</a>
        </div>
    )
};

export default BookBody;