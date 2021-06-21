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
    saveBook() {
        return axios.post(`${server}/api/books`);
    },
    deleteBook(id) {
        return axios.delete(`${server}/api/books/${id}`);
    }
};

export default API;