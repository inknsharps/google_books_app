# Google Books Search App

## Description

This is a MERN stack ([MongoDB](https://www.mongodb.com/), [Express](http://expressjs.com/), [React](https://reactjs.org/) and [Node.js](https://nodejs.dev/)) web application that makes use of the [Google Books API](https://developers.google.com/books). A deployed version can be found [here](https://polar-springs-41138.herokuapp.com/).

## Installation

1. Make sure you have [Node.js](https://nodejs.dev/) installed on your local machine.
2. You will need to have a MongoDB server installed on your local machine to access the data locally. You can install the community version [here](https://www.mongodb.com/try/download/community).
3. Then clone or download the repository. There are two folders in this repository, one for the front end ( `/client` ) and one for the backend ( `/server` ). Each has their own `package.json`, so you will need to install dependencies for both directories.
```
	// Navigate into the client directory, and run npm install
	cd ./client
    npm install

	// Navigate into the server directory, and run npm install
	cd ./server
	npm install
```
4. You'll have to also run both servers that are running on `localhost:3000` (front end), and `localhost:3001` by running the following:
```
	// Navigate into the server directory, and run npm start
	cd ./server
    npm start

	// Navigate into the client directory, and run npm start
	cd ./client
    npm start
```
5. After which, you can open up `localhost:3000` on your web browser to view and use the application.

## Usage

* Search for books on the Google Books API, and display a title, thumbnail, authors, description, and Google Books link.
* Save any books to a MongoDB database, and view and delete entries that  you've saved.

## Images