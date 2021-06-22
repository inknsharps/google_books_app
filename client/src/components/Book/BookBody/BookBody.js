import React from "react";

const BookBody = ({ title, authors, thumbnail, infoLink, description}) => {
    return (
        <div className="BookBody card-body">
            <p> <strong>Authors:</strong> { authors }</p>
            <img src={ thumbnail } alt={ `${title}-thumbnail` }></img>
            <p className="m-5"> <strong>Description:</strong> { description }</p>
            <a href={ infoLink } target="_blank" rel="noreferrer">Google Books Link</a>
        </div>
    )
};

export default BookBody;