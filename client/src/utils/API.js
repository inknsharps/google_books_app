import axios from "axios";

// For development only! Change this once we get a build going.
const server = "http://localhost:3001";

const API = {
    getGoogleBooks(query) {
        return axios.get(`${server}/search/${query}`);
    },
    getSavedBooks() {
        return axios.get(`${server}/api/books`);
    },
    saveBook(book) {
        return axios.post(`${server}/api/books`, {
            title: book.title,
            authors: book.authors,
            image: book.thumbnail,
            link: book.infoLink,
            description: book.description
        });
    },
    deleteBook(id) {
        return axios.delete(`${server}/api/books/${id}`);
    }
};

export default API;